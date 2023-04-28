import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrowserPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrowserPlusIcon = React.forwardRef<SVGSVGElement, TablerBrowserPlusIconProps>(
	function TablerBrowserPlusIcon(props, ref) {
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
				<path d="M10 14h4" />
				<path d="M12 12v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrowserPlusIcon.displayName = "TablerBrowserPlusIcon";
}
