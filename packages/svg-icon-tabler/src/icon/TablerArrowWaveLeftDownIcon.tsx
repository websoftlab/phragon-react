import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowWaveLeftDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowWaveLeftDownIcon = React.forwardRef<SVGSVGElement, TablerArrowWaveLeftDownIconProps>(
	function TablerArrowWaveLeftDownIcon(props, ref) {
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
				<path d="M7 14h-4v-4" />
				<path d="M21 12c-.887 1.284 -2.48 2.033 -4 2c-1.52 .033 -3.113 -.716 -4 -2s-2.48 -2.033 -4 -2c-1.52 -.033 -3 1 -4 2l-2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowWaveLeftDownIcon.displayName = "TablerArrowWaveLeftDownIcon";
}
