import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsJoinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsJoinIcon = React.forwardRef<SVGSVGElement, TablerArrowsJoinIconProps>(
	function TablerArrowsJoinIcon(props, ref) {
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
				<path d="M3 7h5l3.5 5h9.5" />
				<path d="M3 17h5l3.495 -5" />
				<path d="M18 15l3 -3l-3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsJoinIcon.displayName = "TablerArrowsJoinIcon";
}
