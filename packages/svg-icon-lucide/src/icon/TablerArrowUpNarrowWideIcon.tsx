import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowUpNarrowWideIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowUpNarrowWideIcon = React.forwardRef<SVGSVGElement, TablerArrowUpNarrowWideIconProps>(
	function TablerArrowUpNarrowWideIcon(props, ref) {
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
				<path d="m3 8 4-4 4 4" />
				<path d="M7 4v16" />
				<path d="M11 12h4" />
				<path d="M11 16h7" />
				<path d="M11 20h10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowUpNarrowWideIcon.displayName = "TablerArrowUpNarrowWideIcon";
}
