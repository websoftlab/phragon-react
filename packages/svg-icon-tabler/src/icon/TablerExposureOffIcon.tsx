import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerExposureOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerExposureOffIcon = React.forwardRef<SVGSVGElement, TablerExposureOffIconProps>(
	function TablerExposureOffIcon(props, ref) {
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
				<path d="M4.6 19.4l7.4 -7.4m2 -2l5.4 -5.4" />
				<path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" />
				<path d="M7 9h2v2" />
				<path d="M13 16h3" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerExposureOffIcon.displayName = "TablerExposureOffIcon";
}
