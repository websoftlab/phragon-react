import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChevronsUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChevronsUpIcon = React.forwardRef<SVGSVGElement, TablerChevronsUpIconProps>(
	function TablerChevronsUpIcon(props, ref) {
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
				<path d="M17 11 L12 6 L7 11" />
				<path d="M17 18 L12 13 L7 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronsUpIcon.displayName = "TablerChevronsUpIcon";
}
