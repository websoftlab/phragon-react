import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandDeliverooIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandDeliverooIcon = React.forwardRef<SVGSVGElement, TablerBrandDeliverooIconProps>(
	function TablerBrandDeliverooIcon(props, ref) {
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
				<path d="M15 11l1 -9l5 .5l-1 13.5l-3 6l-12.5 -2.5l-1.5 -6l7 -1.5l-1.5 -7.5l4.5 -1z" />
				<path d="M14.5,15.5a1,1 0 1,0 2,0a1,1 0 1,0 -2,0" />
				<path d="M10.5,14.5a1,1 0 1,0 2,0a1,1 0 1,0 -2,0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandDeliverooIcon.displayName = "TablerBrandDeliverooIcon";
}
