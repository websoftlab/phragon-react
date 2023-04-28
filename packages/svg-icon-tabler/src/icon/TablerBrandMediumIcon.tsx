import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandMediumIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandMediumIcon = React.forwardRef<SVGSVGElement, TablerBrandMediumIconProps>(
	function TablerBrandMediumIcon(props, ref) {
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
				<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
				<path d="M8 9h1l3 3l3 -3h1" />
				<path d="M8 15l2 0" />
				<path d="M14 15l2 0" />
				<path d="M9 9l0 6" />
				<path d="M15 9l0 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandMediumIcon.displayName = "TablerBrandMediumIcon";
}
