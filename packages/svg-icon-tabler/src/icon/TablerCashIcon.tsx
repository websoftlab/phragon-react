import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCashIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCashIcon = React.forwardRef<SVGSVGElement, TablerCashIconProps>(function TablerCashIcon(props, ref) {
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
			<path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
			<path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCashIcon.displayName = "TablerCashIcon";
}
