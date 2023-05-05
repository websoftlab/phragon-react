import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBriefcaseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBriefcaseIcon = React.forwardRef<SVGSVGElement, TablerBriefcaseIconProps>(
	function TablerBriefcaseIcon(props, ref) {
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
				<path d="M4 7 H20 A2 2 0 0 1 22 9 V19 A2 2 0 0 1 20 21 H4 A2 2 0 0 1 2 19 V9 A2 2 0 0 1 4 7 z" />
				<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBriefcaseIcon.displayName = "TablerBriefcaseIcon";
}
