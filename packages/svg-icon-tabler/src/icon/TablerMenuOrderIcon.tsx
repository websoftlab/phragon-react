import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMenuOrderIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMenuOrderIcon = React.forwardRef<SVGSVGElement, TablerMenuOrderIconProps>(
	function TablerMenuOrderIcon(props, ref) {
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
				<path d="M4 10h16" />
				<path d="M4 14h16" />
				<path d="M9 18l3 3l3 -3" />
				<path d="M9 6l3 -3l3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMenuOrderIcon.displayName = "TablerMenuOrderIcon";
}
