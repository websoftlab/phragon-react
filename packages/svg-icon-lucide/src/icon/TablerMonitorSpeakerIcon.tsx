import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMonitorSpeakerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMonitorSpeakerIcon = React.forwardRef<SVGSVGElement, TablerMonitorSpeakerIconProps>(
	function TablerMonitorSpeakerIcon(props, ref) {
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
				<path d="M5.5 20H8" />
				<path d="M17 9h.01" />
				<path d="M14 4 H20 A2 2 0 0 1 22 6 V18 A2 2 0 0 1 20 20 H14 A2 2 0 0 1 12 18 V6 A2 2 0 0 1 14 4 z" />
				<path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
				<path d="M18 15 A1 1 0 0 1 17 16 A1 1 0 0 1 16 15 A1 1 0 0 1 18 15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMonitorSpeakerIcon.displayName = "TablerMonitorSpeakerIcon";
}
