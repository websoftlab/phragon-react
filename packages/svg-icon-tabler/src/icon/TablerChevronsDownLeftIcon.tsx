import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChevronsDownLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChevronsDownLeftIcon = React.forwardRef<SVGSVGElement, TablerChevronsDownLeftIconProps>(
	function TablerChevronsDownLeftIcon(props, ref) {
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
				<path d="M11 5v8h8" />
				<path d="M7 9v8h8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronsDownLeftIcon.displayName = "TablerChevronsDownLeftIcon";
}
