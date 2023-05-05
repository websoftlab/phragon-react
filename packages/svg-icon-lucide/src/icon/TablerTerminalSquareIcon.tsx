import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTerminalSquareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTerminalSquareIcon = React.forwardRef<SVGSVGElement, TablerTerminalSquareIconProps>(
	function TablerTerminalSquareIcon(props, ref) {
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
				<path d="m7 11 2-2-2-2" />
				<path d="M11 13h4" />
				<path d="M5 3 H19 A2 2 0 0 1 21 5 V19 A2 2 0 0 1 19 21 H5 A2 2 0 0 1 3 19 V5 A2 2 0 0 1 5 3 z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTerminalSquareIcon.displayName = "TablerTerminalSquareIcon";
}
