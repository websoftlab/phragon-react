import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShowerHeadIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShowerHeadIcon = React.forwardRef<SVGSVGElement, TablerShowerHeadIconProps>(
	function TablerShowerHeadIcon(props, ref) {
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
				<path d="m4 4 2.5 2.5" />
				<path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
				<path d="M15 5 5 15" />
				<path d="M14 17v.01" />
				<path d="M10 16v.01" />
				<path d="M13 13v.01" />
				<path d="M16 10v.01" />
				<path d="M11 20v.01" />
				<path d="M17 14v.01" />
				<path d="M20 11v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerShowerHeadIcon.displayName = "TablerShowerHeadIcon";
}
