import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerListSearchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerListSearchIcon = React.forwardRef<SVGSVGElement, TablerListSearchIconProps>(
	function TablerListSearchIcon(props, ref) {
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
				<path d="M15 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
				<path d="M18.5 18.5l2.5 2.5" />
				<path d="M4 6h16" />
				<path d="M4 12h4" />
				<path d="M4 18h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerListSearchIcon.displayName = "TablerListSearchIcon";
}
