import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSatelliteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSatelliteIcon = React.forwardRef<SVGSVGElement, TablerSatelliteIconProps>(
	function TablerSatelliteIcon(props, ref) {
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
				<path d="M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414z" />
				<path d="M6 10l-3 3l3 3l3 -3" />
				<path d="M10 6l3 -3l3 3l-3 3" />
				<path d="M12 12l1.5 1.5" />
				<path d="M14.5 17a2.5 2.5 0 0 0 2.5 -2.5" />
				<path d="M15 21a6 6 0 0 0 6 -6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSatelliteIcon.displayName = "TablerSatelliteIcon";
}
