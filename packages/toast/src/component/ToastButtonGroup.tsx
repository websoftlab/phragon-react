import type { HTMLProps } from "react";
import React from "react";
import { createUseStyles } from "@phragon-react/jss";

export interface ToastButtonGroupProps extends HTMLProps<HTMLDivElement> {}

const useStyles = createUseStyles<"buttonGroup", ToastButtonGroupProps>(
	{
		buttonGroup: {
			display: "inline-flex",
			alignItems: "center",
			gap: ".5em",
		},
	},
	{ name: "ToastButtonGroup" }
);

export function ToastButtonGroup(props: ToastButtonGroupProps) {
	const styles = useStyles(props);
	const { className, ...rest } = props;
	return <div className={styles.buttonGroup + (className ? ` ${className}` : "")} {...rest} />;
}
