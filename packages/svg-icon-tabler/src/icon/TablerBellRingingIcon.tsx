import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBellRingingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBellRingingIcon = React.forwardRef<SVGSVGElement, TablerBellRingingIconProps>(
	function TablerBellRingingIcon(props, ref) {
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
				<path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
				<path d="M9 17v1a3 3 0 0 0 6 0v-1" />
				<path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
				<path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBellRingingIcon.displayName = "TablerBellRingingIcon";
}
