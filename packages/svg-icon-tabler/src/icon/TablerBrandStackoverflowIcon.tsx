import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandStackoverflowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandStackoverflowIcon = React.forwardRef<SVGSVGElement, TablerBrandStackoverflowIconProps>(
	function TablerBrandStackoverflowIcon(props, ref) {
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
				<path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1" />
				<path d="M8 16h8" />
				<path d="M8.322 12.582l7.956 .836" />
				<path d="M8.787 9.168l7.826 1.664" />
				<path d="M10.096 5.764l7.608 2.472" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandStackoverflowIcon.displayName = "TablerBrandStackoverflowIcon";
}
