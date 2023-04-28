import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMultiplier15xIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMultiplier15xIcon = React.forwardRef<SVGSVGElement, TablerMultiplier15xIconProps>(
	function TablerMultiplier15xIcon(props, ref) {
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
				<path d="M4 16v-8l-2 2" />
				<path d="M10 16h2a2 2 0 1 0 0 -4h-2v-4h4" />
				<path d="M7 16v.01" />
				<path d="M17 16l4 -4" />
				<path d="M21 16l-4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMultiplier15xIcon.displayName = "TablerMultiplier15xIcon";
}
