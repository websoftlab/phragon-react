import type { HTMLProps } from "react";
import React from "react";
import { createUseStyles } from "@phragon-react/jss";

export interface ToastTextProps extends HTMLProps<HTMLDivElement> {}

const useStyles = createUseStyles<"text", ToastTextProps>(
	{
		text: {
			fontSize: "1em",
			alignSelf: "center",
			marginRight: "auto",
			"@media screen and (max-width: 480px)": {
				fontSize: ".875em",
			},
		},
	},
	{ name: "ToastText" }
);

export function ToastText(props: ToastTextProps) {
	const { className, ...rest } = props;
	const styles = useStyles(props);
	return <div className={styles.text + (className ? ` ${className}` : "")} {...rest} />;
}
