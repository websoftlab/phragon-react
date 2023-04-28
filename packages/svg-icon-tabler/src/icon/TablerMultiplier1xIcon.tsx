import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMultiplier1xIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMultiplier1xIcon = React.forwardRef<SVGSVGElement, TablerMultiplier1xIconProps>(
	function TablerMultiplier1xIcon(props, ref) {
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
				<path d="M9 16v-8l-2 2" />
				<path d="M13 16l4 -4" />
				<path d="M17 16l-4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMultiplier1xIcon.displayName = "TablerMultiplier1xIcon";
}
