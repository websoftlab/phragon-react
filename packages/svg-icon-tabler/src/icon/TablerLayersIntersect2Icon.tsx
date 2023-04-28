import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLayersIntersect2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLayersIntersect2Icon = React.forwardRef<SVGSVGElement, TablerLayersIntersect2IconProps>(
	function TablerLayersIntersect2Icon(props, ref) {
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
				<path d="M8 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
				<path d="M4 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
				<path d="M9 15l6 -6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLayersIntersect2Icon.displayName = "TablerLayersIntersect2Icon";
}
