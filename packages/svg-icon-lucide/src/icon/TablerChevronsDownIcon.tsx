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
				<path d="M7 13 L12 18 L17 13" />
				<path d="M7 6 L12 11 L17 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronsDownIcon.displayName = "TablerChevronsDownIcon";
}
