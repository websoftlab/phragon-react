import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLayoutGridIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLayoutGridIcon = React.forwardRef<SVGSVGElement, TablerLayoutGridIconProps>(
	function TablerLayoutGridIcon(props, ref) {
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
				<path d="M3 3 H10 V10 H3 V3 z" />
				<path d="M14 3 H21 V10 H14 V3 z" />
				<path d="M14 14 H21 V21 H14 V14 z" />
				<path d="M3 14 H10 V21 H3 V14 z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLayoutGridIcon.displayName = "TablerLayoutGridIcon";
}
