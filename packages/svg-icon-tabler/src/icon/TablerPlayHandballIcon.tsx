import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlayHandballIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlayHandballIcon = React.forwardRef<SVGSVGElement, TablerPlayHandballIconProps>(
	function TablerPlayHandballIcon(props, ref) {
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
				<path d="M13 21l3.5 -2l-4.5 -4l2 -4.5" />
				<path d="M7 6l2 4l5 .5l4 2.5l2.5 3" />
				<path d="M4 20l5 -1l1.5 -2" />
				<path d="M15 7a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
				<path d="M9.5 5a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlayHandballIcon.displayName = "TablerPlayHandballIcon";
}
