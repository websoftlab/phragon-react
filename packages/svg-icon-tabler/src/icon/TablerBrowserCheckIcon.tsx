import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrowserCheckIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrowserCheckIcon = React.forwardRef<SVGSVGElement, TablerBrowserCheckIconProps>(
	function TablerBrowserCheckIcon(props, ref) {
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
				<path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
				<path d="M4 8h16" />
				<path d="M8 4v4" />
				<path d="M9.5 14.5l1.5 1.5l3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrowserCheckIcon.displayName = "TablerBrowserCheckIcon";
}
