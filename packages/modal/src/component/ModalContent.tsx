import type { HTMLProps } from "react";
import React from "react";
import { createUseStyles } from "@phragon-react/jss";

export interface ModalContentProps extends HTMLProps<HTMLDivElement> {
	isHeader: boolean;
	isFooter: boolean;
}

const useStyles = createUseStyles<"content" | `@media ${string}`, ModalContentProps>(
	{
		content: ({ isHeader, isFooter }: ModalContentProps) => {
			return {
				paddingLeft: 20,
				paddingRight: 20,
				paddingTop: isHeader ? 15 : 20,
				paddingBottom: isFooter ? 15 : 20,
			};
		},
		"@media screen and (max-width: 480px)": {
			content: ({ isHeader, isFooter }: ModalContentProps) => {
				return {
					paddingLeft: 15,
					paddingRight: 15,
					paddingTop: isHeader ? 12 : 15,
					paddingBottom: isFooter ? 12 : 15,
				};
			},
		},
	},
	{ name: "ModalContent" }
);

export function ModalContent(props: ModalContentProps) {
	const { isHeader, isFooter, className, ...rest } = props;
	const styles = useStyles(props);
	return <div {...rest} className={styles.content + (className ? ` ${className}` : "")} />;
}
