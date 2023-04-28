import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMicroscopeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMicroscopeOffIcon = React.forwardRef<SVGSVGElement, TablerMicroscopeOffIconProps>(
	function TablerMicroscopeOffIcon(props, ref) {
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
				<path d="M5 21h14" />
				<path d="M6 18h2" />
				<path d="M7 18v3" />
				<path d="M10 10l-1 1l3 3l1 -1m2 -2l3 -3l-3 -3l-3 3" />
				<path d="M10.5 12.5l-1.5 1.5" />
				<path d="M17 3l3 3" />
				<path d="M12 21a6 6 0 0 0 5.457 -3.505m.441 -3.599a6 6 0 0 0 -2.183 -3.608" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMicroscopeOffIcon.displayName = "TablerMicroscopeOffIcon";
}
