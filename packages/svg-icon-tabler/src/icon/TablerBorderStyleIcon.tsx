import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBorderStyleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBorderStyleIcon = React.forwardRef<SVGSVGElement, TablerBorderStyleIconProps>(
	function TablerBorderStyleIcon(props, ref) {
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
				<path d="M4 20v-14a2 2 0 0 1 2 -2h14" />
				<path d="M20 8v.01" />
				<path d="M20 12v.01" />
				<path d="M20 16v.01" />
				<path d="M8 20v.01" />
				<path d="M12 20v.01" />
				<path d="M16 20v.01" />
				<path d="M20 20v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBorderStyleIcon.displayName = "TablerBorderStyleIcon";
}
