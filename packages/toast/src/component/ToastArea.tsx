import type { HTMLProps } from "react";
import type { Toast } from "../types";
import React from "react";
import { createUseStyles } from "@phragon-react/jss";

export interface ToastAreaProps extends HTMLProps<HTMLDivElement> {
	position: Toast.Position;
}

type PositionClassName = "topRight" | "topCenter" | "topLeft" | "bottomRight" | "bottomCenter" | "bottomLeft";

const useStyles = createUseStyles<"area" | "isTop" | PositionClassName | `@media ${string}`, ToastAreaProps>(
	(theme) => ({
		area: {
			fontSize: theme.fontSize,
			position: "fixed",
			zIndex: theme.zIndex.toast || 9999,
			padding: 4,
			height: 0,
			boxSizing: "border-box",
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-end",
			gap: "1em",
		},
		isTop: {
			flexDirection: "column-reverse",
		},
		topLeft: {
			top: "1em",
			left: "1em",
			alignItems: "flex-start",
		},
		topRight: {
			top: "1em",
			right: "1em",
			alignItems: "flex-end",
		},
		topCenter: {
			top: "1em",
			left: "50%",
			transform: "translateX(-50%)",
			alignItems: "center",
		},
		bottomLeft: {
			bottom: "1em",
			left: "1em",
			alignItems: "flex-start",
		},
		bottomRight: {
			bottom: "1em",
			right: "1em",
			alignItems: "flex-end",
		},
		bottomCenter: {
			bottom: "1em",
			left: "50%",
			transform: "translateX(-50%)",
			alignItems: "center",
		},
		"@media screen and (max-width: 480px)": {
			area: {
				width: "100vw",
				padding: 1,
				margin: 0,
				left: "0 !important",
				alignItems: "normal",
				gap: 1,
				"&$topLeft, &$topRight, &$topCenter": {
					top: 0,
					transform: "translateX(0)",
				},
				"&$bottomLeft, &$bottomRight, &$bottomCenter": {
					bottom: 0,
					transform: "translateX(0)",
				},
			},
		},
	}),
	{ name: "ToastArea" }
);

const pc: Record<Toast.Position, PositionClassName> = {
	"top-left": "topLeft",
	"top-right": "topRight",
	"top-center": "topCenter",
	"bottom-left": "bottomLeft",
	"bottom-right": "bottomRight",
	"bottom-center": "bottomCenter",
};

export function ToastArea(props: ToastAreaProps) {
	const { className: classNameProp, position, ...rest } = props;
	const positionClassName = pc.hasOwnProperty(position) ? pc[position] : "bottomCenter";
	const isTop = positionClassName.startsWith("top");
	const styles = useStyles(props);
	let className = `${styles.area} ${styles[positionClassName]}`;
	if (isTop) {
		className += ` ${styles.isTop}`;
	}
	if (classNameProp) {
		className += ` ${classNameProp}`;
	}
	return <div className={className} {...rest} />;
}
