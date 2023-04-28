import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockShareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockShareIcon = React.forwardRef<SVGSVGElement, TablerClockShareIconProps>(
	function TablerClockShareIcon(props, ref) {
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
				<path d="M20.943 13.016a9 9 0 1 0 -8.915 7.984" />
				<path d="M16 22l5 -5" />
				<path d="M21 21.5v-4.5h-4.5" />
				<path d="M12 7v5l2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClockShareIcon.displayName = "TablerClockShareIcon";
}
