import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDatabaseEditIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDatabaseEditIcon = React.forwardRef<SVGSVGElement, TablerDatabaseEditIconProps>(
	function TablerDatabaseEditIcon(props, ref) {
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
				<path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
				<path d="M4 6v6c0 1.657 3.582 3 8 3c.478 0 .947 -.016 1.402 -.046" />
				<path d="M20 12v-6" />
				<path d="M4 12v6c0 1.526 3.04 2.786 6.972 2.975" />
				<path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDatabaseEditIcon.displayName = "TablerDatabaseEditIcon";
}
