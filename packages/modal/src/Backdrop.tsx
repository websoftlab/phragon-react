import type { ModalBackdropProps } from "./component";
import React from "react";
import { useComponentContext } from "./context";
import { useTransitionEnd } from "@phragon-react/use-transition-end";

export interface BackdropProps extends ModalBackdropProps {
	fallbackTimeout: number;
}

export function Backdrop(props: BackdropProps) {
	const { fallbackTimeout, ...rest } = props;
	const { ModalBackdrop } = useComponentContext();
	const { ref, isExit } = useTransitionEnd<HTMLDivElement>({ isOpen: props.isOpen, fallbackTimeout });
	if (isExit) {
		return null;
	}
	return <ModalBackdrop ref={ref} {...rest} />;
}
