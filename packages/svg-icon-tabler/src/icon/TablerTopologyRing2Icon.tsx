import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTopologyRing2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTopologyRing2Icon = React.forwardRef<SVGSVGElement, TablerTopologyRing2IconProps>(
	function TablerTopologyRing2Icon(props, ref) {
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
				<path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M7 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M21 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M7 18h10" />
				<path d="M18 16l-5 -8" />
				<path d="M11 8l-5 8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTopologyRing2Icon.displayName = "TablerTopologyRing2Icon";
}
