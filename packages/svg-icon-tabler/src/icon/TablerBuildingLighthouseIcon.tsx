import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingLighthouseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingLighthouseIcon = React.forwardRef<SVGSVGElement, TablerBuildingLighthouseIconProps>(
	function TablerBuildingLighthouseIcon(props, ref) {
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
				<path d="M12 3l2 3l2 15h-8l2 -15z" />
				<path d="M8 9l8 0" />
				<path d="M3 11l2 -2l-2 -2" />
				<path d="M21 11l-2 -2l2 -2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingLighthouseIcon.displayName = "TablerBuildingLighthouseIcon";
}
