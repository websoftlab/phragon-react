import type { HTMLProps } from "react";
import type { Modal } from "../types";
import type { JssStyle } from "jss";
import React from "react";
import { createUseStyles } from "@phragon-react/jss";

const containerSize: Record<Modal.Size, string | number> = {
	full: "100%",
	large: 780,
	normal: 580,
	medium: 400,
	small: 320,
};

export interface ModalContainerProps extends HTMLProps<HTMLDivElement> {
	isOpen: boolean;
	disableScale: boolean;
	modalSize: Modal.Size;
}

const useStyles = createUseStyles<"container" | `@media ${string}`, ModalContainerProps>(
	{
		container: ({ isOpen, modalSize, disableScale }: ModalContainerProps) => {
			const containerStyle: JssStyle = {
				position: "relative",
				width: "100%",
				zIndex: isOpen ? 10 : 5,
				transform: disableScale ? undefined : isOpen ? "scale(1)" : "scale(0.75, 0.5)",
				opacity: isOpen ? 1 : 0,
				visibility: isOpen ? "visible" : "hidden",
				transition: disableScale ? ".3s opacity, .3s visibility" : ".3s opacity, .3s visibility, .3s transform",
			};
			if (modalSize !== "full" && containerSize[modalSize]) {
				containerStyle.marginTop = 20;
				containerStyle.padding = "0 20px 30px 20px";
				containerStyle.maxWidth = containerSize[modalSize];
			}
			return containerStyle;
		},
		"@media screen and (max-width: 480px)": {
			container: ({ modalSize }: ModalContainerProps) => {
				const container: JssStyle = {};
				if (modalSize !== "full" && containerSize[modalSize]) {
					container.marginTop = 15;
					container.padding = "0 15px 20px 15px";
				}
				return container;
			},
		},
	},
	{ name: "ModalContainer" }
);

export const ModalContainer = React.forwardRef<HTMLDivElement, ModalContainerProps>(function ModalContainer(
	props,
	ref
) {
	const { className, isOpen, modalSize, disableScale, ...rest } = props;
	const styles = useStyles(props);
	return <div {...rest} className={styles.container + (className ? ` ${className}` : "")} ref={ref} />;
});
