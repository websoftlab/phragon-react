import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyForintIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyForintIcon = React.forwardRef<SVGSVGElement, TablerCurrencyForintIconProps>(
	function TablerCurrencyForintIcon(props, ref) {
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
				<path d="M11 4h-4a3 3 0 0 0 -3 3v12" />
				<path d="M10 11h-6" />
				<path d="M16 4v13a2 2 0 0 0 2 2h2" />
				<path d="M19 9h-5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencyForintIcon.displayName = "TablerCurrencyForintIcon";
}
