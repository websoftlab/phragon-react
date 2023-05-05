import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNavigationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNavigationIcon = React.forwardRef<SVGSVGElement, TablerNavigationIconProps>(
	function TablerNavigationIcon(props, ref) {
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
				<path d="M3 11 L22 2 L13 21 L11 13 L3 11Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerNavigationIcon.displayName = "TablerNavigationIcon";
}
