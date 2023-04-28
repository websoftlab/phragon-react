import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceAudioTapeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceAudioTapeIcon = React.forwardRef<SVGSVGElement, TablerDeviceAudioTapeIconProps>(
	function TablerDeviceAudioTapeIcon(props, ref) {
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
				<path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<path d="M3 17l4 -3h10l4 3" />
				<path d="M7,9.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
				<path d="M16,9.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceAudioTapeIcon.displayName = "TablerDeviceAudioTapeIcon";
}
