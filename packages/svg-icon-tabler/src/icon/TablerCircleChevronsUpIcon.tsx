import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleChevronsUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleChevronsUpIcon = React.forwardRef<SVGSVGElement, TablerCircleChevronsUpIconProps>(
	function TablerCircleChevronsUpIcon(props, ref) {
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
				<path d="M9 15l3 -3l3 3" />
				<path d="M9 11l3 -3l3 3" />
				<path d="M12 21a9 9 0 1 0 -.265 0l.265 0z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleChevronsUpIcon.displayName = "TablerCircleChevronsUpIcon";
}
