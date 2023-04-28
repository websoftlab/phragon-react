import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlayBasketballIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlayBasketballIcon = React.forwardRef<SVGSVGElement, TablerPlayBasketballIconProps>(
	function TablerPlayBasketballIcon(props, ref) {
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
				<path d="M10 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
				<path d="M5 21l3 -3l.75 -1.5" />
				<path d="M14 21v-4l-4 -3l.5 -6" />
				<path d="M5 12l1 -3l4.5 -1l3.5 3l4 1" />
				<path d="M18.5 16a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlayBasketballIcon.displayName = "TablerPlayBasketballIcon";
}
