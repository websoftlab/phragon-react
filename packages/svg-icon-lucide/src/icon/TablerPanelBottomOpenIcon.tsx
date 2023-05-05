import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPanelBottomOpenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPanelBottomOpenIcon = React.forwardRef<SVGSVGElement, TablerPanelBottomOpenIconProps>(
	function TablerPanelBottomOpenIcon(props, ref) {
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
				<path d="M5 3 H19 A2 2 0 0 1 21 5 V19 A2 2 0 0 1 19 21 H5 A2 2 0 0 1 3 19 V5 A2 2 0 0 1 5 3 z" />
				<path d="M3 15 L21 15" />
				<path d="m9 10 3-3 3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPanelBottomOpenIcon.displayName = "TablerPanelBottomOpenIcon";
}
