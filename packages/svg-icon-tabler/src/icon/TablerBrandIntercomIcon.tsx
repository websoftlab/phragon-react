import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandIntercomIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandIntercomIcon = React.forwardRef<SVGSVGElement, TablerBrandIntercomIconProps>(
	function TablerBrandIntercomIcon(props, ref) {
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
				<path d="M7 8v3" />
				<path d="M10 7v6" />
				<path d="M14 7v6" />
				<path d="M17 8v3" />
				<path d="M7 15c4 2.667 6 2.667 10 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandIntercomIcon.displayName = "TablerBrandIntercomIcon";
}
