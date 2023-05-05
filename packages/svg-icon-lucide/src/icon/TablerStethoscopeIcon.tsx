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
				<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
				<path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
				<path d="M22 10 A2 2 0 0 1 20 12 A2 2 0 0 1 18 10 A2 2 0 0 1 22 10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerStethoscopeIcon.displayName = "TablerStethoscopeIcon";
}
