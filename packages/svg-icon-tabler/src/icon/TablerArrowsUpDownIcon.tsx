import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsUpDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsUpDownIcon = React.forwardRef<SVGSVGElement, TablerArrowsUpDownIconProps>(
	function TablerArrowsUpDownIcon(props, ref) {
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
				<path d="M7 3l0 18" />
				<path d="M10 6l-3 -3l-3 3" />
				<path d="M20 18l-3 3l-3 -3" />
				<path d="M17 21l0 -18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsUpDownIcon.displayName = "TablerArrowsUpDownIcon";
}
