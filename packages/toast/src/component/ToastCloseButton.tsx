import type { HTMLProps } from "react";
import React from "react";
import { createUseStyles } from "@phragon-react/jss";
import { minButton, minSvgIcon } from "./util";
import { SvgIconClose } from "./svg-icon";

export interface ToastCloseButtonProps extends HTMLProps<HTMLDivElement> {}

const useStyles = createUseStyles<"closeButton", ToastCloseButtonProps>(
	(theme) => ({
		closeButton: {
			...minButton(theme),
			...minSvgIcon,
			lineHeight: 0,
			borderRadius: 16,
		},
	}),
	{ name: "ToastCloseButton" }
);

export function ToastCloseButton(props: ToastCloseButtonProps) {
	const { className, ...rest } = props;
	const styles = useStyles(props);
	return (
		<span className={styles.closeButton + (className ? ` ${className}` : "")} {...rest}>
			<SvgIconClose />
		</span>
	);
}
