import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTemperaturePlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTemperaturePlusIcon = React.forwardRef<SVGSVGElement, TablerTemperaturePlusIconProps>(
	function TablerTemperaturePlusIcon(props, ref) {
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
				<path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
				<path d="M8 9l4 0" />
				<path d="M16 9l6 0" />
				<path d="M19 6l0 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTemperaturePlusIcon.displayName = "TablerTemperaturePlusIcon";
}
