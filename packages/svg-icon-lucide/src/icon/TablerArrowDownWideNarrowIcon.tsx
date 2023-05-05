import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowDownWideNarrowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowDownWideNarrowIcon = React.forwardRef<SVGSVGElement, TablerArrowDownWideNarrowIconProps>(
	function TablerArrowDownWideNarrowIcon(props, ref) {
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
				<path d="M11 4h10" />
				<path d="M11 8h7" />
				<path d="M11 12h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowDownWideNarrowIcon.displayName = "TablerArrowDownWideNarrowIcon";
}
