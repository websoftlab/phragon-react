import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBleachNoChlorineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBleachNoChlorineIcon = React.forwardRef<SVGSVGElement, TablerBleachNoChlorineIconProps>(
	function TablerBleachNoChlorineIcon(props, ref) {
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
				<path d="M6.576 19l7.907 -13.733" />
				<path d="M11.719 19.014l5.346 -9.284" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBleachNoChlorineIcon.displayName = "TablerBleachNoChlorineIcon";
}
