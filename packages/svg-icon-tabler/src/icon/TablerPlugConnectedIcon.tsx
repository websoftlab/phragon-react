import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlugConnectedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlugConnectedIcon = React.forwardRef<SVGSVGElement, TablerPlugConnectedIconProps>(
	function TablerPlugConnectedIcon(props, ref) {
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
				<path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z" />
				<path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z" />
				<path d="M3 21l2.5 -2.5" />
				<path d="M18.5 5.5l2.5 -2.5" />
				<path d="M10 11l-2 2" />
				<path d="M13 14l-2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlugConnectedIcon.displayName = "TablerPlugConnectedIcon";
}
