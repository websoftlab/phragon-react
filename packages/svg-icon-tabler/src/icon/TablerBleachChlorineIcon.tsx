import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBleachChlorineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBleachChlorineIcon = React.forwardRef<SVGSVGElement, TablerBleachChlorineIconProps>(
	function TablerBleachChlorineIcon(props, ref) {
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
				<path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
				<path d="M11 12h-1a2 2 0 1 0 0 4h1" />
				<path d="M14 12v4h2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBleachChlorineIcon.displayName = "TablerBleachChlorineIcon";
}
