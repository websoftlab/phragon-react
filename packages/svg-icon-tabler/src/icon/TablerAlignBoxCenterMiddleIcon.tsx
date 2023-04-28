import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignBoxCenterMiddleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignBoxCenterMiddleIcon = React.forwardRef<SVGSVGElement, TablerAlignBoxCenterMiddleIconProps>(
	function TablerAlignBoxCenterMiddleIcon(props, ref) {
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
				<path d="M3 19v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<path d="M11 15h2" />
				<path d="M9 12h6" />
				<path d="M10 9h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlignBoxCenterMiddleIcon.displayName = "TablerAlignBoxCenterMiddleIcon";
}
