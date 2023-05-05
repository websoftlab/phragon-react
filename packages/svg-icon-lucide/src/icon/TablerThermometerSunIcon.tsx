import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerThermometerSunIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerThermometerSunIcon = React.forwardRef<SVGSVGElement, TablerThermometerSunIconProps>(
	function TablerThermometerSunIcon(props, ref) {
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
				<path d="M12 9a4 4 0 0 0-2 7.5" />
				<path d="M12 3v2" />
				<path d="m6.6 18.4-1.4 1.4" />
				<path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
				<path d="M4 13H2" />
				<path d="M6.34 7.34 4.93 5.93" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerThermometerSunIcon.displayName = "TablerThermometerSunIcon";
}
