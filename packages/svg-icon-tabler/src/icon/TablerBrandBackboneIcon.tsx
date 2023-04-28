import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandBackboneIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandBackboneIcon = React.forwardRef<SVGSVGElement, TablerBrandBackboneIconProps>(
	function TablerBrandBackboneIcon(props, ref) {
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
				<path d="M5 20l14 -8l-14 -8z" />
				<path d="M19 20l-14 -8l14 -8z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandBackboneIcon.displayName = "TablerBrandBackboneIcon";
}
