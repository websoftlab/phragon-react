import type { Modal } from "./types";
import React from "react";
import { useComponentContext } from "./context";
import { ModalComponent, getDefaultModalComponentProps } from "./ModalComponent";
import { useTransitionEnd } from "@phragon-react/use-transition-end";
import { useBoolean } from "@phragon-react/use-boolean";

export interface AreaProps {
	modal: Modal.Item;
	fallbackTimeout: number;
	onClose: () => void;
	onExit: () => void;
}

export function Area(props: AreaProps) {
	const { modal, fallbackTimeout, onClose, onExit } = props;
	const { component, open: isOpen } = modal;
	const { ModalArea, ModalContainer } = useComponentContext();
	const areaRef = React.useRef<HTMLDivElement | null>(null);
	const { ref } = useTransitionEnd<HTMLDivElement>({ isOpen, onExit, fallbackTimeout });

	const { isTrue: isInit, onTrue: setIsInit } = useBoolean(false);
	const def = getDefaultModalComponentProps(component);

	React.useEffect(() => {
		if (isOpen && !isInit) {
			const id = window.setTimeout(() => {
				setIsInit();
			}, 40);
			return () => {
				window.clearTimeout(id);
			};
		}
	}, [isInit, isOpen]);
	React.useEffect(() => {
		const target = areaRef.current;
		if (target) {
			let isFocus = false;
			function focus(e: MouseEvent | TouchEvent) {
				if (e.type === "mousedown" || e.type === "touchstart") {
					if (e.target === target) {
						isFocus = true;
					}
				} else if (isFocus) {
					isFocus = false;
					if ((e.target === target && !modal.closable) || modal.lock) {
						onClose();
					}
				}
			}

			function toggle(name: "mousedown" | "mouseup" | "touchstart" | "touchend", add: 1 | 0) {
				add ? document.addEventListener(name, focus) : document.removeEventListener(name, focus);
			}

			toggle("mousedown", 1);
			toggle("mouseup", 1);
			toggle("touchstart", 1);
			toggle("touchend", 1);

			return () => {
				toggle("mousedown", 0);
				toggle("mouseup", 0);
				toggle("touchstart", 0);
				toggle("touchend", 0);
			};
		}
	}, [modal, onClose]);

	return (
		<ModalArea ref={areaRef}>
			<ModalContainer
				{...def.props}
				ref={ref}
				component={modal.component}
				props={modal.props}
				onExit={onExit}
				fallbackTimeout={fallbackTimeout}
				isOpen={isInit && isOpen}
				modalSize={modal.size}
				disableScale={def.disableScale || false}
			>
				<ModalComponent modal={modal} onClose={onClose} />
			</ModalContainer>
		</ModalArea>
	);
}
