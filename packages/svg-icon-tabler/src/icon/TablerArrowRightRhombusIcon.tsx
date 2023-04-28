import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowRightRhombusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowRightRhombusIcon = React.forwardRef<SVGSVGElement, TablerArrowRightRhombusIconProps>(
	function TablerArrowRightRhombusIcon(props, ref) {
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
				<path d="M8 12h13" />
				<path d="M18 9l3 3l-3 3" />
				<path d="M5.5 9.5l-2.5 2.5l2.5 2.5l2.5 -2.5z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowRightRhombusIcon.displayName = "TablerArrowRightRhombusIcon";
}
