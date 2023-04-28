import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyRufiyaaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyRufiyaaIcon = React.forwardRef<SVGSVGElement, TablerCurrencyRufiyaaIconProps>(
	function TablerCurrencyRufiyaaIcon(props, ref) {
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
				<path d="M20 16h.01" />
				<path d="M4 16c9.5 -4 11.5 -8 14 -9" />
				<path d="M12 8l5 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencyRufiyaaIcon.displayName = "TablerCurrencyRufiyaaIcon";
}
