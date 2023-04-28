import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStethoscopeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStethoscopeIcon = React.forwardRef<SVGSVGElement, TablerStethoscopeIconProps>(
	function TablerStethoscopeIcon(props, ref) {
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
				<path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" />
				<path d="M8 15a6 6 0 1 0 12 0v-3" />
				<path d="M11 3v2" />
				<path d="M6 3v2" />
				<path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerStethoscopeIcon.displayName = "TablerStethoscopeIcon";
}
