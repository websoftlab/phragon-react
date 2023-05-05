import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignJustifyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignJustifyIcon = React.forwardRef<SVGSVGElement, TablerAlignJustifyIconProps>(
	function TablerAlignJustifyIcon(props, ref) {
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
				<path d="M3 6 L21 6" />
				<path d="M3 12 L21 12" />
				<path d="M3 18 L21 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlignJustifyIcon.displayName = "TablerAlignJustifyIcon";
}
