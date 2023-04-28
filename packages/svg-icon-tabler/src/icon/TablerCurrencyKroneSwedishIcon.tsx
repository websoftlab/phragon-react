import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyKroneSwedishIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyKroneSwedishIcon = React.forwardRef<SVGSVGElement, TablerCurrencyKroneSwedishIconProps>(
	function TablerCurrencyKroneSwedishIcon(props, ref) {
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
				<path d="M15 10v8" />
				<path d="M19 10a4 4 0 0 0 -4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencyKroneSwedishIcon.displayName = "TablerCurrencyKroneSwedishIcon";
}
