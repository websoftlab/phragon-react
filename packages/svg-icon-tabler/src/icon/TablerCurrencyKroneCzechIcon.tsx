import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyKroneCzechIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyKroneCzechIcon = React.forwardRef<SVGSVGElement, TablerCurrencyKroneCzechIconProps>(
	function TablerCurrencyKroneCzechIcon(props, ref) {
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
				<path d="M5 6v12" />
				<path d="M5 12c3.5 0 6 -3 6 -6" />
				<path d="M5 12c3.5 0 6 3 6 6" />
				<path d="M19 6l-2 2l-2 -2" />
				<path d="M19 12h-2a3 3 0 0 0 0 6h2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencyKroneCzechIcon.displayName = "TablerCurrencyKroneCzechIcon";
}
