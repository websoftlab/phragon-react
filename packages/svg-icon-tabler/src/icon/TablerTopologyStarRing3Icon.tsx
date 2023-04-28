import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTopologyStarRing3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTopologyStarRing3Icon = React.forwardRef<SVGSVGElement, TablerTopologyStarRing3IconProps>(
	function TablerTopologyStarRing3Icon(props, ref) {
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
				<path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M6 12h4" />
				<path d="M14 12h4" />
				<path d="M15 7l-2 3" />
				<path d="M9 7l2 3" />
				<path d="M11 14l-2 3" />
				<path d="M13 14l2 3" />
				<path d="M10 5h4" />
				<path d="M10 19h4" />
				<path d="M17 17l2 -3" />
				<path d="M19 10l-2 -3" />
				<path d="M7 7l-2 3" />
				<path d="M5 14l2 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTopologyStarRing3Icon.displayName = "TablerTopologyStarRing3Icon";
}
