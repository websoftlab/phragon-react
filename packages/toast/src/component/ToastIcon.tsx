import type { HTMLProps, ElementType } from "react";
import type { Toast } from "../types";
import React from "react";
import { createUseStyles } from "@phragon-react/jss";
import { SvgIconAlert, SvgIconBell, SvgIconHeart, SvgIconMessage } from "./svg-icon";
import { minSvgIcon } from "./util";

const icons: Map<string, ElementType> = new Map();

icons.set("alert", SvgIconAlert);
icons.set("bell", SvgIconBell);
icons.set("heart", SvgIconHeart);
icons.set("message", SvgIconMessage);

export function addToastIcon(name: Toast.Icon, component: ElementType) {
	icons.set(name, component);
}

export interface ToastIconProps extends HTMLProps<HTMLDivElement> {
	icon: Toast.Icon;
}

const useStyles = createUseStyles<"icon", ToastIconProps>(
	{
		icon: {
			...minSvgIcon,
			display: "inline-flex",
			justifyContent: "center",
			alignItems: "center",
		},
	},
	{ name: "ToastIcon" }
);

export function ToastIcon(props: ToastIconProps) {
	const { icon, className, ...rest } = props;
	const styles = useStyles(props);
	const Icon = icons.get(icon);
	if (!Icon) {
		return null;
	}
	return (
		<div className={styles.icon + (className ? ` ${className}` : "")} {...rest}>
			<Icon />
		</div>
	);
}
