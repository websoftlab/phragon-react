import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNavigationOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNavigationOffIcon = React.forwardRef<SVGSVGElement, TablerNavigationOffIconProps>(
	function TablerNavigationOffIcon(props, ref) {
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
				<path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43" />
				<path d="M17.39 11.73 22 2l-9.73 4.61" />
				<path d="M2 2 L22 22" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerNavigationOffIcon.displayName = "TablerNavigationOffIcon";
}
