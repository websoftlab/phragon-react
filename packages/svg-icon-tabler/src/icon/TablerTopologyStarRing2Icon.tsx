import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTopologyStarRing2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTopologyStarRing2Icon = React.forwardRef<SVGSVGElement, TablerTopologyStarRing2IconProps>(
	function TablerTopologyStarRing2Icon(props, ref) {
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
				<path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M6 12h4" />
				<path d="M14 12h4" />
				<path d="M12 6v4" />
				<path d="M12 14v4" />
				<path d="M5.5 10.5l5 -5" />
				<path d="M13.5 5.5l5 5" />
				<path d="M18.5 13.5l-5 5" />
				<path d="M10.5 18.5l-5 -5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTopologyStarRing2Icon.displayName = "TablerTopologyStarRing2Icon";
}
