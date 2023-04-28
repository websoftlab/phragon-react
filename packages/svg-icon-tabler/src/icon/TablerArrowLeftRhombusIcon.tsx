import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowLeftRhombusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowLeftRhombusIcon = React.forwardRef<SVGSVGElement, TablerArrowLeftRhombusIconProps>(
	function TablerArrowLeftRhombusIcon(props, ref) {
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
				<path d="M16 12h-13" />
				<path d="M6 9l-3 3l3 3" />
				<path d="M18.5 9.5l2.5 2.5l-2.5 2.5l-2.5 -2.5z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowLeftRhombusIcon.displayName = "TablerArrowLeftRhombusIcon";
}
