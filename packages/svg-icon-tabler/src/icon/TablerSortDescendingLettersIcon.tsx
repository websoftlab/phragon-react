import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSortDescendingLettersIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSortDescendingLettersIcon = React.forwardRef<SVGSVGElement, TablerSortDescendingLettersIconProps>(
	function TablerSortDescendingLettersIcon(props, ref) {
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
				<path d="M15 21v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" />
				<path d="M19 10h-4l4 -7h-4" />
				<path d="M4 15l3 3l3 -3" />
				<path d="M7 6v12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSortDescendingLettersIcon.displayName = "TablerSortDescendingLettersIcon";
}
