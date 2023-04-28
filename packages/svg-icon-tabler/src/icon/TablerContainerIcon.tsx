import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerContainerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerContainerIcon = React.forwardRef<SVGSVGElement, TablerContainerIconProps>(
	function TablerContainerIcon(props, ref) {
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
				<path d="M8 4m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
				<path d="M4 4v.01" />
				<path d="M4 20v.01" />
				<path d="M4 16v.01" />
				<path d="M4 12v.01" />
				<path d="M4 8v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerContainerIcon.displayName = "TablerContainerIcon";
}
