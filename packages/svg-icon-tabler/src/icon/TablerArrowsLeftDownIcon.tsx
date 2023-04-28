import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsLeftDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsLeftDownIcon = React.forwardRef<SVGSVGElement, TablerArrowsLeftDownIconProps>(
	function TablerArrowsLeftDownIcon(props, ref) {
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
				<path d="M7 3l-4 4l4 4" />
				<path d="M3 7h11a3 3 0 0 1 3 3v11" />
				<path d="M13 17l4 4l4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsLeftDownIcon.displayName = "TablerArrowsLeftDownIcon";
}
