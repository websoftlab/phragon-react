import type { HTMLProps } from "react";
import React from "react";
import { createUseStyles } from "@phragon-react/jss";

export interface ModalPaperProps extends HTMLProps<HTMLDivElement> {
	isFull: boolean;
}

const useStyles = createUseStyles<"paper" | `@media ${string}`, ModalPaperProps>(
	(theme) => ({
		paper: ({ isFull }: ModalPaperProps) => {
			return {
				fontSize: theme.fontSize,
				backgroundColor: theme.surface.paper,
				color: theme.surface.color,
				borderRadius: isFull ? 0 : 10,
				minHeight: 52,
				position: "relative",
				boxShadow: `0 4px 20px -4px rgba(0,0,0,${theme.dark ? ".5" : ".1"})`,
				minWidth: 240,
			};
		},
		"@media screen and (max-width: 480px)": {
			paper: ({ isFull }: ModalPaperProps) => {
				return {
					borderRadius: isFull ? 0 : 16,
				};
			},
		},
	}),
	{ name: "ModalPaper" }
);

export function ModalPaper(props: ModalPaperProps) {
	const { className, isFull, ...rest } = props;
	const styles = useStyles(props);
	return <div {...rest} className={styles.paper + (className ? ` ${className}` : "")} />;
}
