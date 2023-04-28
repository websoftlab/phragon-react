import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceAirpodsCaseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceAirpodsCaseIcon = React.forwardRef<SVGSVGElement, TablerDeviceAirpodsCaseIconProps>(
	function TablerDeviceAirpodsCaseIcon(props, ref) {
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
				<path d="M21 10h-18" />
				<path d="M3 4m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
				<path d="M7 10v1.5a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5 -1.5v-1.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceAirpodsCaseIcon.displayName = "TablerDeviceAirpodsCaseIcon";
}
