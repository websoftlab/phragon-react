import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyBahrainiIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyBahrainiIcon = React.forwardRef<SVGSVGElement, TablerCurrencyBahrainiIconProps>(
	function TablerCurrencyBahrainiIcon(props, ref) {
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
				<path d="M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2 -2v-3" />
				<path d="M7 19.01v-.01" />
				<path d="M14 15.01v-.01" />
				<path d="M17 15h2a2 2 0 0 0 1.649 -3.131l-2.653 -3.869" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencyBahrainiIcon.displayName = "TablerCurrencyBahrainiIcon";
}
