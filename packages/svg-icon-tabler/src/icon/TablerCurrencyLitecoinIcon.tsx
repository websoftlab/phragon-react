import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyLitecoinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyLitecoinIcon = React.forwardRef<SVGSVGElement, TablerCurrencyLitecoinIconProps>(
	function TablerCurrencyLitecoinIcon(props, ref) {
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
				<path d="M18 19h-8.194a2 2 0 0 1 -1.98 -2.283l1.674 -11.717" />
				<path d="M14 9l-9 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencyLitecoinIcon.displayName = "TablerCurrencyLitecoinIcon";
}
