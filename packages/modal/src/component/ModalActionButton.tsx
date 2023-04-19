import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import type { UseOnActionClickOptions } from "@phragon-react/action-service";
import type { JssThemeColorName } from "@phragon-react/jss";
import React from "react";
import { ActionButton } from "@phragon-react/action-service";
import { minButton } from "./util";
import { createUseStyles } from "@phragon-react/jss";

export type ModalActionButtonVariant<Variant extends string = string> = JssThemeColorName<Variant>;

export interface ModalActionButtonProps
	extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "onClick">,
		UseOnActionClickOptions {
	icon?: string;
	variant?: ModalActionButtonVariant;
}

const useStyles = createUseStyles<"actionButton" | `@media ${string}`, ModalActionButtonProps>(
	(theme) => ({
		actionButton: ({ variant = "primary" }: ModalActionButtonProps) => {
			if (!theme.color[variant]) {
				variant = "primary";
			}
			const color = theme.color[variant];
			return {
				...minButton,
				fontSize: theme.fontSize,
				color: color.text,
				backgroundColor: color.main,
				transition: ".3s background-color",
				padding: "4px 16px",
				borderRadius: 5,
				height: 40,
				lineHeight: "1.2",
				"&:hover": {
					backgroundColor: color.hover,
				},
			};
		},
		"@media screen and (max-width: 480px)": {
			actionButton: () => ({
				padding: "4px 12px",
				borderRadius: 12,
			}),
		},
	}),
	{ name: "ModalActionButton" }
);

export function ModalActionButton(props: ModalActionButtonProps) {
	const { className, icon, variant, ref, ...rest } = props;
	const styles = useStyles(props);
	return <ActionButton as="button" className={styles.actionButton + (className ? ` ${className}` : "")} {...rest} />;
}
