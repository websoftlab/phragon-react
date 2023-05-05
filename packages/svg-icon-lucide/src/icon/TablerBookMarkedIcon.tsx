import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBookMarkedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBookMarkedIcon = React.forwardRef<SVGSVGElement, TablerBookMarkedIconProps>(
	function TablerBookMarkedIcon(props, ref) {
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
				<path d="M10 2 L10 10 L13 7 L16 10 L16 2" />
				<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
				<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBookMarkedIcon.displayName = "TablerBookMarkedIcon";
}
