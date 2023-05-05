import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPiggyBankIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPiggyBankIcon = React.forwardRef<SVGSVGElement, TablerPiggyBankIconProps>(
	function TablerPiggyBankIcon(props, ref) {
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
				<path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
				<path d="M2 9v1c0 1.1.9 2 2 2h1" />
				<path d="M16 11h0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPiggyBankIcon.displayName = "TablerPiggyBankIcon";
}
