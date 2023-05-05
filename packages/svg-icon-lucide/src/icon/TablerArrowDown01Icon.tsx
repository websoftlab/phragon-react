import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowDown01IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowDown01Icon = React.forwardRef<SVGSVGElement, TablerArrowDown01IconProps>(
	function TablerArrowDown01Icon(props, ref) {
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
				<path d="m3 16 4 4 4-4" />
				<path d="M7 20V4" />
				<path d="M17 4 H17 A2 2 0 0 1 19 6 V8 A2 2 0 0 1 17 10 H17 A2 2 0 0 1 15 8 V6 A2 2 0 0 1 17 4 z" />
				<path d="M17 20v-6h-2" />
				<path d="M15 20h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowDown01Icon.displayName = "TablerArrowDown01Icon";
}
