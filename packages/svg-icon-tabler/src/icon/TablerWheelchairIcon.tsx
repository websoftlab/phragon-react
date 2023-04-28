import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWheelchairIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWheelchairIcon = React.forwardRef<SVGSVGElement, TablerWheelchairIconProps>(
	function TablerWheelchairIcon(props, ref) {
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
				<path d="M8 16m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
				<path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M19 17a3 3 0 0 0 -3 -3h-3.4" />
				<path d="M3 3h1a2 2 0 0 1 2 2v6" />
				<path d="M6 8h11" />
				<path d="M15 8v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWheelchairIcon.displayName = "TablerWheelchairIcon";
}
