import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeSignalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeSignalIcon = React.forwardRef<SVGSVGElement, TablerHomeSignalIconProps>(
	function TablerHomeSignalIcon(props, ref) {
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
				<path d="M15 22v-2" />
				<path d="M18 22v-4" />
				<path d="M21 22v-6" />
				<path d="M19 12.494v-.494h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4" />
				<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHomeSignalIcon.displayName = "TablerHomeSignalIcon";
}
