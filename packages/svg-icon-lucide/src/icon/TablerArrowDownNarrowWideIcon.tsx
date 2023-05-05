import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowDownNarrowWideIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowDownNarrowWideIcon = React.forwardRef<SVGSVGElement, TablerArrowDownNarrowWideIconProps>(
	function TablerArrowDownNarrowWideIcon(props, ref) {
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
				<path d="m3 16 4 4 4-4" />
				<path d="M7 20V4" />
				<path d="M11 4h4" />
				<path d="M11 8h7" />
				<path d="M11 12h10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowDownNarrowWideIcon.displayName = "TablerArrowDownNarrowWideIcon";
}
