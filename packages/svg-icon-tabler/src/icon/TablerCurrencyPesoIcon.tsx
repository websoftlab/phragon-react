import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyPesoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyPesoIcon = React.forwardRef<SVGSVGElement, TablerCurrencyPesoIconProps>(
	function TablerCurrencyPesoIcon(props, ref) {
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
				<path d="M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5" />
				<path d="M18 8h-12" />
				<path d="M18 11h-12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencyPesoIcon.displayName = "TablerCurrencyPesoIcon";
}
