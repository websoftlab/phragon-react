import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerThermometerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerThermometerIcon = React.forwardRef<SVGSVGElement, TablerThermometerIconProps>(
	function TablerThermometerIcon(props, ref) {
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
				<path d="M19 5a2.828 2.828 0 0 1 0 4l-8 8h-4v-4l8 -8a2.828 2.828 0 0 1 4 0z" />
				<path d="M16 7l-1.5 -1.5" />
				<path d="M13 10l-1.5 -1.5" />
				<path d="M10 13l-1.5 -1.5" />
				<path d="M7 17l-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerThermometerIcon.displayName = "TablerThermometerIcon";
}
