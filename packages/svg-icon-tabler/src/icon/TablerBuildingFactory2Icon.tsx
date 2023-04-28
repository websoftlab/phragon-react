import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingFactory2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingFactory2Icon = React.forwardRef<SVGSVGElement, TablerBuildingFactory2IconProps>(
	function TablerBuildingFactory2Icon(props, ref) {
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
				<path d="M3 21h18" />
				<path d="M5 21v-12l5 4v-4l5 4h4" />
				<path d="M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582" />
				<path d="M9 17h1" />
				<path d="M14 17h1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingFactory2Icon.displayName = "TablerBuildingFactory2Icon";
}
