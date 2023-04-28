import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMultiplier05xIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMultiplier05xIcon = React.forwardRef<SVGSVGElement, TablerMultiplier05xIconProps>(
	function TablerMultiplier05xIcon(props, ref) {
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
				<path d="M8 16h2a2 2 0 1 0 0 -4h-2v-4h4" />
				<path d="M5 16v.01" />
				<path d="M15 16l4 -4" />
				<path d="M19 16l-4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMultiplier05xIcon.displayName = "TablerMultiplier05xIcon";
}
