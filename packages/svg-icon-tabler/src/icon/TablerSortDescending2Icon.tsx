import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSortDescending2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSortDescending2Icon = React.forwardRef<SVGSVGElement, TablerSortDescending2IconProps>(
	function TablerSortDescending2Icon(props, ref) {
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
				<path d="M5 5m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z" />
				<path d="M5 14m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z" />
				<path d="M14 15l3 3l3 -3" />
				<path d="M17 18v-12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSortDescending2Icon.displayName = "TablerSortDescending2Icon";
}
