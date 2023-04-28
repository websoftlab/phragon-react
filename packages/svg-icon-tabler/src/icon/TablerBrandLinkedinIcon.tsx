import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandLinkedinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandLinkedinIcon = React.forwardRef<SVGSVGElement, TablerBrandLinkedinIconProps>(
	function TablerBrandLinkedinIcon(props, ref) {
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
				<path d="M8 11l0 5" />
				<path d="M8 8l0 .01" />
				<path d="M12 16l0 -5" />
				<path d="M16 16v-3a2 2 0 0 0 -4 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandLinkedinIcon.displayName = "TablerBrandLinkedinIcon";
}
