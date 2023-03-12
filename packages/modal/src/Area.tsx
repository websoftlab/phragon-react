import type { Modal } from "./types";
import React from "react";
import { useComponentContext } from "./context";
import { ModalComponent, getDefaultModalComponentProps } from "./ModalComponent";
import { useTransitionEnd } from "@phragon-react/use-transition-end";
import { useBoolean } from "@phragon-react/use-boolean";
import { requestAnimation, cancelAnimation } from "./util";

export interface AreaProps {
	modal: Modal.Item;
	fallbackTimeout: number;
	onClose: () => void;
	onExit: () => void;
}

export function Area(props: AreaProps) {
	const { modal, fallbackTimeout, onClose, onExit } = props;
	const { component, open: isOpen } = modal;
	const { ModalArea, ModalContainer, disableBackdropClose } = useComponentContext();
	const areaRef = React.useRef<HTMLDivElement | null>(null);
	const { ref } = useTransitionEnd<HTMLDivElement>({ isOpen, onExit, fallbackTimeout });

	const { isTrue: isInit, onTrue: setIsInit } = useBoolean(false);
	const def = getDefaultModalComponentProps(component);

	React.useEffect(() => {
		if (isOpen && !isInit) {
			const id = requestAnimation(setIsInit);
			return () => {
				cancelAnimation(id);
			};
		}
	}, [isInit, isOpen]);

	React.useEffect(() => {
		const area = areaRef.current;
		if (area && !disableBackdropClose) {
			let isFocus = false;
			function focus(e: MouseEvent | TouchEvent) {
				const { target } = e;
				if (!target || !modal.closable || modal.lock || modal.disableBackdropClose) {
					isFocus = false;
					return;
				}
				const closable = target === area || (target as Element).closest("[aria-modal=true]") == null;
				if (e.type === "mousedown" || e.type === "touchstart") {
					isFocus = closable;
				} else if (isFocus) {
					isFocus = false;
					if (closable) {
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
	}, [modal, disableBackdropClose, onClose]);

	return (
		<ModalArea ref={areaRef}>
			<ModalContainer
				{...def.props}
				ref={ref}
				isOpen={isInit && isOpen}
				modalSize={modal.size}
				disableScale={def.disableScale || false}
			>
				<ModalComponent modal={modal} onClose={onClose} />
			</ModalContainer>
		</ModalArea>
	);
}
