import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandDoubanIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandDoubanIcon = React.forwardRef<SVGSVGElement, TablerBrandDoubanIconProps>(
	function TablerBrandDoubanIcon(props, ref) {
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
				<path d="M4 20h16" />
				<path d="M5 4h14" />
				<path d="M8 8h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z" />
				<path d="M16 14l-2 6" />
				<path d="M8 17l1 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandDoubanIcon.displayName = "TablerBrandDoubanIcon";
}
