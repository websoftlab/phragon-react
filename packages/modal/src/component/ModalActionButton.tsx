import type { HTMLProps, ElementType } from "react";
import type { UseActionClickOptions } from "@phragon-react/dashboard";
import type { To } from "@phragon/render-driver-react/app";
import { Link } from "@phragon/render-driver-react/app";
import React from "react";
import { useActionClick } from "@phragon-react/dashboard";
import { minButtonProps } from "./util";

export interface ModalActionButtonProps
	extends Omit<HTMLProps<HTMLDivElement>, "onClick" | "action">,
		UseActionClickOptions {}

export function ModalActionButton(props: ModalActionButtonProps) {
	const { to, action, confirmation, onClick: onNativeClick, style, ...rest } = props;
	const { external, onlyAction, onClick, wait } = useActionClick({
		to,
		goto: false,
		action,
		confirmation,
		onClick: onNativeClick,
	});

	let As: ElementType = "button";

	const buttonProps: HTMLProps<HTMLElement> = {
		...rest,
	};

	if (wait || rest.disabled) {
		buttonProps.type = "button";
		buttonProps.disabled = rest.disabled;
	} else {
		buttonProps.onClick = onClick;
		if (onlyAction) {
			buttonProps.type = "button";
		} else if (external) {
			As = "a";
			buttonProps.href = to as string;
		} else {
			As = Link;
			(buttonProps as HTMLProps<HTMLElement> & { to: To }).to = to as To;
		}
	}

	return (
		<As
			{...buttonProps}
			style={{
				...minButtonProps(),
				backgroundColor: "#196bca",
				color: "#ffffff",
				padding: "4px 16px",
				borderRadius: 5,
				height: 40,
				lineHeight: "1.2",
				...style,
			}}
		/>
	);
}
