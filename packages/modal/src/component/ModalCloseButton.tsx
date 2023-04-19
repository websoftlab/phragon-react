import type { HTMLProps } from "react";
import React from "react";
import { minButton } from "./util";
import { createUseStyles } from "@phragon-react/jss";

export interface ModalCloseButtonProps extends HTMLProps<HTMLDivElement> {}

const useStyles = createUseStyles<"closeButton", ModalCloseButtonProps>(
	(theme) => ({
		closeButton: {
			...minButton,
			transition: ".3s background-color, .3s transform",
			backgroundColor: theme.dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
			color: theme.surface.paper,
			stroke: "currentColor",
			position: "absolute",
			top: 10,
			right: 10,
			lineHeight: 0,
			fontSize: "32px",
			width: "1em",
			height: "1em",
			borderRadius: 16,
			zIndex: 1,
			"& > svg": {
				width: ".75em",
				height: ".75em",
			},
			"&:hover": {
				backgroundColor: theme.dark ? "rgba(255,255,255,.25)" : "rgba(0,0,0,0.35)",
				transform: "rotate(90deg)",
			},
		},
		"@media screen and (max-width: 480px)": {
			closeButton: {
				fontSize: "26px",
				top: 8,
				right: 8,
			},
		},
	}),
	{ name: "ModalCloseButton" }
);

export function ModalCloseButton(props: ModalCloseButtonProps) {
	const { className, children, ...rest } = props;
	const styles = useStyles(props);
	return (
		<span className={styles.closeButton + (className ? ` ${className}` : "")} {...rest}>
			{children}
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<line x1="6" y1="6" x2="18" y2="18" />
				<line x1="18" x2="6" y1="6" y2="18" />
			</svg>
		</span>
	);
}
