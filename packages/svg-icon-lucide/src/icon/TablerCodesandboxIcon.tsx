import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCodesandboxIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCodesandboxIcon = React.forwardRef<SVGSVGElement, TablerCodesandboxIconProps>(
	function TablerCodesandboxIcon(props, ref) {
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
				<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
				<path d="M7.5 4.21 L12 6.81 L16.5 4.21" />
				<path d="M7.5 19.79 L7.5 14.6 L3 12" />
				<path d="M21 12 L16.5 14.6 L16.5 19.79" />
				<path d="M3.27 6.96 L12 12.01 L20.73 6.96" />
				<path d="M12 22.08 L12 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCodesandboxIcon.displayName = "TablerCodesandboxIcon";
}
