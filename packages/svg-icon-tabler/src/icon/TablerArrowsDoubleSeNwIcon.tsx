import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsDoubleSeNwIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsDoubleSeNwIcon = React.forwardRef<SVGSVGElement, TablerArrowsDoubleSeNwIconProps>(
	function TablerArrowsDoubleSeNwIcon(props, ref) {
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
				<path d="M3 10l11 11" />
				<path d="M14 17v4h-4" />
				<path d="M14 3h-4v4" />
				<path d="M21 14l-11 -11" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsDoubleSeNwIcon.displayName = "TablerArrowsDoubleSeNwIcon";
}
