import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeRibbonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeRibbonIcon = React.forwardRef<SVGSVGElement, TablerHomeRibbonIconProps>(
	function TablerHomeRibbonIcon(props, ref) {
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
				<path d="M16 15h5v7l-2.5 -1.5l-2.5 1.5z" />
				<path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5" />
				<path d="M9 21v-6a2 2 0 0 1 2 -2h1.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHomeRibbonIcon.displayName = "TablerHomeRibbonIcon";
}
