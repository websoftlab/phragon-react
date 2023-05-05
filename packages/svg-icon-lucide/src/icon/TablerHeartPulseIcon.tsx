import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHeartPulseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHeartPulseIcon = React.forwardRef<SVGSVGElement, TablerHeartPulseIconProps>(
	function TablerHeartPulseIcon(props, ref) {
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
				<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
				<path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHeartPulseIcon.displayName = "TablerHeartPulseIcon";
}
