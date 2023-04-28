import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeSearchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeSearchIcon = React.forwardRef<SVGSVGElement, TablerHomeSearchIconProps>(
	function TablerHomeSearchIcon(props, ref) {
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
				<path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4.7" />
				<path d="M9 21v-6a2 2 0 0 1 2 -2h2" />
				<path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M20.2 20.2l1.8 1.8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHomeSearchIcon.displayName = "TablerHomeSearchIcon";
}
