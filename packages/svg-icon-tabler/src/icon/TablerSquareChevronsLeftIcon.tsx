import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareChevronsLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareChevronsLeftIcon = React.forwardRef<SVGSVGElement, TablerSquareChevronsLeftIconProps>(
	function TablerSquareChevronsLeftIcon(props, ref) {
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
				<path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareChevronsLeftIcon.displayName = "TablerSquareChevronsLeftIcon";
}
