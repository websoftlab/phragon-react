import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChevronsDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChevronsDownIcon = React.forwardRef<SVGSVGElement, TablerChevronsDownIconProps>(
	function TablerChevronsDownIcon(props, ref) {
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
				<path d="M7 7l5 5l5 -5" />
				<path d="M7 13l5 5l5 -5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronsDownIcon.displayName = "TablerChevronsDownIcon";
}
