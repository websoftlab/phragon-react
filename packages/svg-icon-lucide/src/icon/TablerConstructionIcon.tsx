import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerConstructionIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerConstructionIcon = React.forwardRef<SVGSVGElement, TablerConstructionIconProps>(
	function TablerConstructionIcon(props, ref) {
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
				<path d="M3 6 H21 A1 1 0 0 1 22 7 V13 A1 1 0 0 1 21 14 H3 A1 1 0 0 1 2 13 V7 A1 1 0 0 1 3 6 z" />
				<path d="M17 14v7" />
				<path d="M7 14v7" />
				<path d="M17 3v3" />
				<path d="M7 3v3" />
				<path d="M10 14 2.3 6.3" />
				<path d="m14 6 7.7 7.7" />
				<path d="m8 6 8 8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerConstructionIcon.displayName = "TablerConstructionIcon";
}
