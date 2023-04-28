import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHeadphonesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHeadphonesIcon = React.forwardRef<SVGSVGElement, TablerHeadphonesIconProps>(
	function TablerHeadphonesIcon(props, ref) {
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
				<path d="M4 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" />
				<path d="M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" />
				<path d="M4 15v-3a8 8 0 0 1 16 0v3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHeadphonesIcon.displayName = "TablerHeadphonesIcon";
}
