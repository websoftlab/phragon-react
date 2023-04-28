import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerExchangeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerExchangeOffIcon = React.forwardRef<SVGSVGElement, TablerExchangeOffIconProps>(
	function TablerExchangeOffIcon(props, ref) {
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
				<path d="M5 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M19 8v5c0 .594 -.104 1.164 -.294 1.692m-1.692 2.298a4.978 4.978 0 0 1 -3.014 1.01h-3l3 -3" />
				<path d="M14 21l-3 -3" />
				<path d="M5 16v-5c0 -1.632 .782 -3.082 1.992 -4m3.008 -1h3l-3 -3" />
				<path d="M11.501 7.499l1.499 -1.499" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerExchangeOffIcon.displayName = "TablerExchangeOffIcon";
}
