import type { HTMLProps } from "react";
import React from "react";
import { minArea } from "./util";
import { createUseStyles } from "@phragon-react/jss";

export interface ModalAreaProps extends HTMLProps<HTMLDivElement> {}

const useStyles = createUseStyles<"area", ModalAreaProps>(
	(theme) => ({
		area: {
			...minArea,
			overflowY: "auto",
			zIndex: (theme.zIndex.modal || 500) + 10,
			display: "flex",
			justifyContent: "center",
			alignItems: "flex-start",
			flexDirection: "row",
		},
	}),
	{ name: "ModalArea" }
);

export const ModalArea = React.forwardRef<HTMLDivElement, ModalAreaProps>(function ModalArea(props, ref) {
	const { className, ...rest } = props;
	const styles = useStyles(props);
	return <div {...rest} className={styles.area + (className ? ` ${className}` : "")} ref={ref} />;
});
