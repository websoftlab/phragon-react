import type { ModalBackdropProps } from "./component";
import React from "react";
import { useComponentContext } from "./context";
import { useTransitionEnd } from "@phragon-react/use-transition-end";
import { cancelAnimation, requestAnimation } from "./util";
import { useBoolean } from "@phragon-react/use-boolean";

export interface BackdropProps extends ModalBackdropProps {
	fallbackTimeout: number;
}

export function Backdrop(props: BackdropProps) {
	const { fallbackTimeout, isOpen: isModalOpen, ...rest } = props;
	const { ModalBackdrop } = useComponentContext();
	const { isTrue: isInit, onTrue: setIsInit, onFalse: onExit } = useBoolean(false);
	const { ref, isExit } = useTransitionEnd<HTMLDivElement>({
		isOpen: isInit && isModalOpen,
		onExit,
		fallbackTimeout,
	});

	React.useEffect(() => {
		if (isModalOpen && !isInit) {
			const id = requestAnimation(setIsInit);
			return () => {
				cancelAnimation(id);
			};
		}
	}, [isInit, isModalOpen]);

	if (isExit && !isModalOpen) {
		return null;
	}

	return <ModalBackdrop ref={ref} isOpen={isInit && isModalOpen} {...rest} />;
}
