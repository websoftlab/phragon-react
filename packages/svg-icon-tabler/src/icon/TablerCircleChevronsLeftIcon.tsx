import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleChevronsLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleChevronsLeftIcon = React.forwardRef<SVGSVGElement, TablerCircleChevronsLeftIconProps>(
	function TablerCircleChevronsLeftIcon(props, ref) {
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
				<path d="M15 15l-3 -3l3 -3" />
				<path d="M11 15l-3 -3l3 -3" />
				<path d="M21 12a9 9 0 1 0 0 .265l0 -.265z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleChevronsLeftIcon.displayName = "TablerCircleChevronsLeftIcon";
}
