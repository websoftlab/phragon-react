import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignBoxRightTopIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignBoxRightTopIcon = React.forwardRef<SVGSVGElement, TablerAlignBoxRightTopIconProps>(
	function TablerAlignBoxRightTopIcon(props, ref) {
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
				<path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<path d="M15 13h2" />
				<path d="M11 10h6" />
				<path d="M13 7h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlignBoxRightTopIcon.displayName = "TablerAlignBoxRightTopIcon";
}
