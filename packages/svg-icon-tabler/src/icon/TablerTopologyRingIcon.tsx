import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTopologyRingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTopologyRingIcon = React.forwardRef<SVGSVGElement, TablerTopologyRingIconProps>(
	function TablerTopologyRingIcon(props, ref) {
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
				<path d="M14 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M14 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M13.5 5.5l5 5" />
				<path d="M5.5 13.5l5 5" />
				<path d="M13.5 18.5l5 -5" />
				<path d="M10.5 5.5l-5 5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTopologyRingIcon.displayName = "TablerTopologyRingIcon";
}
