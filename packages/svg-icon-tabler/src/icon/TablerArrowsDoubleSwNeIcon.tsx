import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsDoubleSwNeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsDoubleSwNeIcon = React.forwardRef<SVGSVGElement, TablerArrowsDoubleSwNeIconProps>(
	function TablerArrowsDoubleSwNeIcon(props, ref) {
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
				<path d="M14 3l-11 11" />
				<path d="M3 10v4h4" />
				<path d="M17 10h4v4" />
				<path d="M10 21l11 -11" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsDoubleSwNeIcon.displayName = "TablerArrowsDoubleSwNeIcon";
}
