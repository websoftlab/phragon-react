import type { HTMLProps } from "react";
import React from "react";
import { createUseStyles } from "@phragon-react/jss";

export interface ModalHeaderProps extends HTMLProps<HTMLHeadingElement> {}

const useStyles = createUseStyles<"header" | `@media ${string}`, ModalHeaderProps>(
	(theme) => ({
		header: {
			padding: "15px 20px 12px 20px",
			margin: 0,
			borderBottom: "1px solid " + (theme.dark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.05)"),
			fontWeight: "bolder",
			fontSize: "1.25em",
			lineHeight: "1.2",
		},
		"@media screen and (max-width: 480px)": {
			header: {
				padding: "12px 15px 10px 15px",
			},
		},
	}),
	{ name: "ModalHeader" }
);

export function ModalHeader(props: ModalHeaderProps) {
	const { className, ...rest } = props;
	const styles = useStyles(props);
	return <h3 {...rest} className={styles.header + (className ? ` ${className}` : "")} />;
}
