import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerContainerOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerContainerOffIcon = React.forwardRef<SVGSVGElement, TablerContainerOffIconProps>(
	function TablerContainerOffIcon(props, ref) {
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
				<path d="M20 4v.01" />
				<path d="M20 20v.01" />
				<path d="M20 16v.01" />
				<path d="M20 12v.01" />
				<path d="M20 8v.01" />
				<path d="M8.297 4.289a1 1 0 0 1 .703 -.289h6a1 1 0 0 1 1 1v7m0 4v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-11" />
				<path d="M4 4v.01" />
				<path d="M4 20v.01" />
				<path d="M4 16v.01" />
				<path d="M4 12v.01" />
				<path d="M4 8v.01" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerContainerOffIcon.displayName = "TablerContainerOffIcon";
}
