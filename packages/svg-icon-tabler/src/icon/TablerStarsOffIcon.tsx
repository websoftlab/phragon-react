import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStarsOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStarsOffIcon = React.forwardRef<SVGSVGElement, TablerStarsOffIconProps>(function TablerStarsOffIcon(
	props,
	ref
) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="M17.373 13.371l.076 -.154a.392 .392 0 0 1 .702 0l.907 1.831m.367 .39c.498 .071 1.245 .18 2.24 .324a.39 .39 0 0 1 .217 .665c-.326 .316 -.57 .553 -.732 .712m-.611 3.405a.39 .39 0 0 1 -.567 .411l-2.172 -1.138l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l1.601 -.232" />
			<path d="M6.2 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
			<path d="M9.557 5.556l1 -.146l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.014 .187m-4.153 -.166l-.744 .39a.392 .392 0 0 1 -.568 -.41l.188 -1.093" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerStarsOffIcon.displayName = "TablerStarsOffIcon";
}
