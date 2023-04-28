import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareChevronsDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareChevronsDownIcon = React.forwardRef<SVGSVGElement, TablerSquareChevronsDownIconProps>(
	function TablerSquareChevronsDownIcon(props, ref) {
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
				<path d="M15 9l-3 3l-3 -3" />
				<path d="M15 13l-3 3l-3 -3" />
				<path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareChevronsDownIcon.displayName = "TablerSquareChevronsDownIcon";
}
