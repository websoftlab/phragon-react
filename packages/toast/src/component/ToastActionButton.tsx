import type { UseOnActionClickOptions } from "@phragon-react/action-service";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import React from "react";
import { createUseStyles } from "@phragon-react/jss";
import { ActionButton } from "@phragon-react/action-service";
import { minButton } from "./util";

export interface ToastActionButtonProps
	extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "onClick">,
		UseOnActionClickOptions {}

const useStyles = createUseStyles<"actionButton" | `@media ${string}`, ToastActionButtonProps>(
	(theme) => ({
		actionButton: {
			...minButton(theme),
			fontSize: "1em",
			padding: "4px 16px",
			borderRadius: 5,
			height: 36,
			lineHeight: "1.2",
		},
		"@media screen and (max-width: 480px)": {
			actionButton: {
				fontSize: ".875em",
				padding: "4px 12px",
				height: 30,
			},
		},
	}),
	{ name: "ToastButtonGroup" }
);

export function ToastActionButton(props: ToastActionButtonProps) {
	const styles = useStyles(props);
	const { className, ref, ...rest } = props;
	return <ActionButton as="button" className={styles.actionButton + (className ? ` ${className}` : "")} {...rest} />;
}
