import type { Toast } from "../types";
import type { HTMLProps } from "react";
import React from "react";
import { createUseStyles } from "@phragon-react/jss";

export interface ToastPaperProps extends HTMLProps<HTMLDivElement> {
	isOpen: boolean;
	isDrag: boolean;
	level: Toast.Level;
}

const useStyles = createUseStyles<"toast" | "open" | "default" | "error" | "info" | "drag", ToastPaperProps>(
	(theme) => ({
		toast: {
			fontSize: theme.fontSize,
			borderRadius: 10,
			boxShadow: `0 4px 20px -4px rgba(0,0,0,${theme.dark ? ".25" : ".1"})`,
			display: "flex",
			gap: "1em",
			justifyContent: "space-between",
			alignItems: "flex-start",
			userSelect: "none",
			position: "relative",
			zIndex: 0,
			overflow: "hidden",
			boxSizing: "border-box",
			padding: "14px 18px",
			flexShrink: 0,
			minWidth: 320,
			maxWidth: "70vw",
			opacity: 0,
			visibility: "hidden",
			transition: ".3s opacity, .3s visibility, .3s transform",
			"@media screen and (max-width: 480px)": {
				borderRadius: 0,
				minWidth: 0,
				maxWidth: "100vw",
				gap: ".75em",
				padding: "12px 14px",
				boxShadow: `0 1px 3px 0 rgba(${theme.dark ? "255,255,255,.5" : "0,0,0,.1"})`,
			},
		},
		drag: {
			transition: "none",
		},
		open: {
			opacity: 1,
			visibility: "visible",
		},
		default: {
			color: theme.surface.color,
			backgroundColor: theme.surface.paper,
		},
		error: {
			color: theme.color.error.badgeText,
			backgroundColor: theme.color.error.badge,
		},
		info: {
			color: theme.color.primary.badgeText,
			backgroundColor: theme.color.primary.badge,
		},
	}),
	{ name: "ToastPaper" }
);

export const ToastPaper = React.forwardRef<HTMLDivElement, ToastPaperProps>(function ToastPaper(props, ref) {
	const styles = useStyles(props);
	let { isOpen, isDrag, level, className: classNameProp, ...rest } = props;
	if (!["info", "error", "default"].includes(level)) {
		level = "default";
	}
	let className = `${styles.toast} ${styles[level]}`;
	if (isOpen) {
		className += ` ${styles.open}`;
	}
	if (isDrag) {
		className += ` ${styles.drag}`;
	}
	if (classNameProp) {
		className += ` ${classNameProp}`;
	}
	return <div ref={ref} className={className} {...rest} />;
});
