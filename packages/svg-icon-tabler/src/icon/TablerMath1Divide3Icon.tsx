import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMath1Divide3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMath1Divide3Icon = React.forwardRef<SVGSVGElement, TablerMath1Divide3IconProps>(
	function TablerMath1Divide3Icon(props, ref) {
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
				<path d="M10 15.5a.5 .5 0 0 1 .5 -.5h2a1.5 1.5 0 0 1 0 3h-1.167h1.167a1.5 1.5 0 0 1 0 3h-2a.5 .5 0 0 1 -.5 -.5" />
				<path d="M5 12h14" />
				<path d="M10 5l2 -2v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMath1Divide3Icon.displayName = "TablerMath1Divide3Icon";
}
