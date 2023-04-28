import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignBoxRightMiddleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignBoxRightMiddleIcon = React.forwardRef<SVGSVGElement, TablerAlignBoxRightMiddleIconProps>(
	function TablerAlignBoxRightMiddleIcon(props, ref) {
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
				<path d="M15 15h2" />
				<path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
				<path d="M11 12h6" />
				<path d="M13 9h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlignBoxRightMiddleIcon.displayName = "TablerAlignBoxRightMiddleIcon";
}
