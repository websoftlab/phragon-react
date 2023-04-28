import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleChevronsRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleChevronsRightIcon = React.forwardRef<SVGSVGElement, TablerCircleChevronsRightIconProps>(
	function TablerCircleChevronsRightIcon(props, ref) {
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
				<path d="M9 9l3 3l-3 3" />
				<path d="M13 9l3 3l-3 3" />
				<path d="M3 12a9 9 0 1 0 0 -.265l0 .265z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleChevronsRightIcon.displayName = "TablerCircleChevronsRightIcon";
}
