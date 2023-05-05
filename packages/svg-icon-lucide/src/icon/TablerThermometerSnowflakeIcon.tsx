import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerThermometerSnowflakeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerThermometerSnowflakeIcon = React.forwardRef<SVGSVGElement, TablerThermometerSnowflakeIconProps>(
	function TablerThermometerSnowflakeIcon(props, ref) {
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
				<path d="M2 12h10" />
				<path d="M9 4v16" />
				<path d="m3 9 3 3-3 3" />
				<path d="M12 6 9 9 6 6" />
				<path d="m6 18 3-3 1.5 1.5" />
				<path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerThermometerSnowflakeIcon.displayName = "TablerThermometerSnowflakeIcon";
}
