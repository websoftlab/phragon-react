import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsSortIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsSortIcon = React.forwardRef<SVGSVGElement, TablerArrowsSortIconProps>(
	function TablerArrowsSortIcon(props, ref) {
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
				<path d="M3 9l4 -4l4 4m-4 -4v14" />
				<path d="M21 15l-4 4l-4 -4m4 4v-14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsSortIcon.displayName = "TablerArrowsSortIcon";
}
