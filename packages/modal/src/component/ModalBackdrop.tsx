import type { HTMLProps } from "react";
import React from "react";
import { minArea } from "./util";
import { createUseStyles } from "@phragon-react/jss";

export interface ModalBackdropProps extends HTMLProps<HTMLDivElement> {
	isOpen: boolean;
}

const useStyles = createUseStyles<"backdrop", ModalBackdropProps>(
	(theme) => ({
		backdrop: ({ isOpen }: ModalBackdropProps) => {
			return {
				...minArea,
				backgroundColor: "rgba(0,0,0,.85)",
				zIndex: theme.zIndex.modal || 500,
				opacity: isOpen ? 1 : 0,
				transition: ".3s opacity",
			};
		},
	}),
	{ name: "ModalBackdrop" }
);

export const ModalBackdrop = React.forwardRef<HTMLDivElement, ModalBackdropProps>(function ModalBackdrop(props, ref) {
	const { className, isOpen, ...rest } = props;
	const styles = useStyles(props);
	return <div {...rest} className={styles.backdrop + (className ? ` ${className}` : "")} ref={ref} />;
});
