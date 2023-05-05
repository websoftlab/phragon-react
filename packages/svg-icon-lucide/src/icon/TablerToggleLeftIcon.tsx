import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerToggleLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerToggleLeftIcon = React.forwardRef<SVGSVGElement, TablerToggleLeftIconProps>(
	function TablerToggleLeftIcon(props, ref) {
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
				<path d="M8 6 H16 A6 6 0 0 1 22 12 V12 A6 6 0 0 1 16 18 H8 A6 6 0 0 1 2 12 V12 A6 6 0 0 1 8 6 z" />
				<path d="M10 12 A2 2 0 0 1 8 14 A2 2 0 0 1 6 12 A2 2 0 0 1 10 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerToggleLeftIcon.displayName = "TablerToggleLeftIcon";
}
