import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBedSingleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBedSingleIcon = React.forwardRef<SVGSVGElement, TablerBedSingleIconProps>(
	function TablerBedSingleIcon(props, ref) {
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
				<path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
				<path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
				<path d="M3 18h18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBedSingleIcon.displayName = "TablerBedSingleIcon";
}
