import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignCenterHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignCenterHorizontalIcon = React.forwardRef<SVGSVGElement, TablerAlignCenterHorizontalIconProps>(
	function TablerAlignCenterHorizontalIcon(props, ref) {
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
				<path d="M2 12h20" />
				<path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
				<path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
				<path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
				<path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlignCenterHorizontalIcon.displayName = "TablerAlignCenterHorizontalIcon";
}
