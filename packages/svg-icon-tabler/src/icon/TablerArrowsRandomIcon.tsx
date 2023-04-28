import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsRandomIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsRandomIcon = React.forwardRef<SVGSVGElement, TablerArrowsRandomIconProps>(
	function TablerArrowsRandomIcon(props, ref) {
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
				<path d="M20 21h-4v-4" />
				<path d="M16 21l5 -5" />
				<path d="M6.5 9.504l-3.5 -2l2 -3.504" />
				<path d="M3 7.504l6.83 -1.87" />
				<path d="M4 16l4 -1l1 4" />
				<path d="M8 15l-3.5 6" />
				<path d="M21 5l-.5 4l-4 -.5" />
				<path d="M20.5 9l-4.5 -5.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsRandomIcon.displayName = "TablerArrowsRandomIcon";
}
