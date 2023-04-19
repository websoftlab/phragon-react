import type { HTMLProps } from "react";
import React from "react";
import { createUseStyles } from "@phragon-react/jss";

export interface ModalFooterProps extends HTMLProps<HTMLDivElement> {}

const useStyles = createUseStyles<"footer" | `@media ${string}`, ModalFooterProps>(
	(theme) => ({
		footer: {
			padding: "12px 20px 15px 20px",
			margin: 0,
			backgroundColor: theme.dark ? "rgba(255,255,255,.025)" : "rgba(0,0,0,.025)",
			display: "flex",
			justifyContent: "flex-end",
			gap: "1em",
		},
		"@media screen and (max-width: 480px)": {
			footer: {
				padding: "10px 15px 12px 15px",
				gap: ".5em",
			},
		},
	}),
	{ name: "ModalFooter" }
);

export function ModalFooter(props: ModalFooterProps) {
	const { className, ...rest } = props;
	const styles = useStyles(props);
	return <div {...rest} className={styles.footer + (className ? ` ${className}` : "")} />;
}
