import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowZigZagIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowZigZagIcon = React.forwardRef<SVGSVGElement, TablerArrowZigZagIconProps>(
	function TablerArrowZigZagIcon(props, ref) {
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
				<path d="M6 20v-10l10 6v-12" />
				<path d="M13 7l3 -3l3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowZigZagIcon.displayName = "TablerArrowZigZagIcon";
}
