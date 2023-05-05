import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRefrigeratorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRefrigeratorIcon = React.forwardRef<SVGSVGElement, TablerRefrigeratorIconProps>(
	function TablerRefrigeratorIcon(props, ref) {
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
				<path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" />
				<path d="M5 10h14" />
				<path d="M15 7v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRefrigeratorIcon.displayName = "TablerRefrigeratorIcon";
}
