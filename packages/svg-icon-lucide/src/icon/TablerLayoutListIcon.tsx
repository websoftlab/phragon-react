import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLayoutListIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLayoutListIcon = React.forwardRef<SVGSVGElement, TablerLayoutListIconProps>(
	function TablerLayoutListIcon(props, ref) {
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
				<path d="M3 14 H10 V21 H3 V14 z" />
				<path d="M3 3 H10 V10 H3 V3 z" />
				<path d="M14 4 L21 4" />
				<path d="M14 9 L21 9" />
				<path d="M14 15 L21 15" />
				<path d="M14 20 L21 20" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLayoutListIcon.displayName = "TablerLayoutListIcon";
}
