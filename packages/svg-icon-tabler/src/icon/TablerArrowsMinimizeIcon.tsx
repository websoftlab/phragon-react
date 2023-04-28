import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsMinimizeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsMinimizeIcon = React.forwardRef<SVGSVGElement, TablerArrowsMinimizeIconProps>(
	function TablerArrowsMinimizeIcon(props, ref) {
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
				<path d="M5 9l4 0l0 -4" />
				<path d="M3 3l6 6" />
				<path d="M5 15l4 0l0 4" />
				<path d="M3 21l6 -6" />
				<path d="M19 9l-4 0l0 -4" />
				<path d="M15 9l6 -6" />
				<path d="M19 15l-4 0l0 4" />
				<path d="M15 15l6 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsMinimizeIcon.displayName = "TablerArrowsMinimizeIcon";
}
