import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerConciergeBellIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerConciergeBellIcon = React.forwardRef<SVGSVGElement, TablerConciergeBellIconProps>(
	function TablerConciergeBellIcon(props, ref) {
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
				<path d="M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z" />
				<path d="M20 16a8 8 0 1 0-16 0" />
				<path d="M12 4v4" />
				<path d="M10 4h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerConciergeBellIcon.displayName = "TablerConciergeBellIcon";
}
