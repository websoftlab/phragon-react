import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLogicXnorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLogicXnorIcon = React.forwardRef<SVGSVGElement, TablerLogicXnorIconProps>(
	function TablerLogicXnorIcon(props, ref) {
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
				<path d="M22 12h-2" />
				<path d="M2 9h4" />
				<path d="M2 15h4" />
				<path d="M5 19c1.778 -4.667 1.778 -9.333 0 -14" />
				<path d="M8 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14z" />
				<path d="M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLogicXnorIcon.displayName = "TablerLogicXnorIcon";
}
