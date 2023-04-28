import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMicroscopeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMicroscopeIcon = React.forwardRef<SVGSVGElement, TablerMicroscopeIconProps>(
	function TablerMicroscopeIcon(props, ref) {
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
				<path d="M9 11l3 3l6 -6l-3 -3z" />
				<path d="M10.5 12.5l-1.5 1.5" />
				<path d="M17 3l3 3" />
				<path d="M12 21a6 6 0 0 0 3.715 -10.712" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMicroscopeIcon.displayName = "TablerMicroscopeIcon";
}
