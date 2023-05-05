import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPanelTopCloseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPanelTopCloseIcon = React.forwardRef<SVGSVGElement, TablerPanelTopCloseIconProps>(
	function TablerPanelTopCloseIcon(props, ref) {
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
				<path d="M3 9 L21 9" />
				<path d="m9 16 3-3 3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPanelTopCloseIcon.displayName = "TablerPanelTopCloseIcon";
}
