import type { PolymorphicRef, PolymorphicComponentPropWithRef } from "@phragon-react/types";
import type { ElementType, ReactElement } from "react";
import type { UseOnActionClickOptions } from "./useOnActionClick";
import { useOnActionClick } from "./useOnActionClick";
import { __isDev__ } from "@phragon-util/global-var";
import React from "react";

export type ActionButtonProps<C extends ElementType> = PolymorphicComponentPropWithRef<C, UseOnActionClickOptions>;

type ActionButtonComponent = (<C extends ElementType = "a">(props: ActionButtonProps<C>) => ReactElement | null) & {
	displayName?: string | undefined;
};

export const ActionButton: ActionButtonComponent = React.forwardRef(function ActionButtonWithRef<
	C extends ElementType = "a"
>({ as, to, action, onClick, confirmation, ...rest }: ActionButtonProps<C>, ref?: PolymorphicRef<C>) {
	const ctx = useOnActionClick({ to, action, onClick, confirmation });
	const As: ElementType = as || "a";
	if (As === "a" || As === "button") {
		const { href, wait, onClick } = ctx;
		const disabled = wait || rest.disabled;
		if (disabled || href == null) {
			return (
				<button
					ref={ref}
					type="button"
					disabled={disabled}
					onClick={disabled ? undefined : onClick}
					{...rest}
				/>
			);
		}
		return <a href={href} ref={ref} role="button" onClick={onClick} {...rest} />;
	}
	const plain = typeof As === "string";
	const asProps = {
		role: plain ? "button" : undefined,
		...rest,
		...(plain ? { onClick: ctx.onClick } : ctx),
	};
	return <As ref={ref} {...asProps} />;
});

if (__isDev__()) {
	ActionButton.displayName = "ActionButton";
}
