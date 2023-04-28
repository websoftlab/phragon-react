import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandYahooIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandYahooIcon = React.forwardRef<SVGSVGElement, TablerBrandYahooIconProps>(
	function TablerBrandYahooIcon(props, ref) {
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
				<path d="M3 6l5 0" />
				<path d="M7 18l7 0" />
				<path d="M4.5 6l5.5 7v5" />
				<path d="M10 13l6 -5" />
				<path d="M12.5 8l5 0" />
				<path d="M20 11l0 4" />
				<path d="M20 18l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandYahooIcon.displayName = "TablerBrandYahooIcon";
}
