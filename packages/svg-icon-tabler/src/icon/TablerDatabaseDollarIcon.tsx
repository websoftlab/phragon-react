import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDatabaseDollarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDatabaseDollarIcon = React.forwardRef<SVGSVGElement, TablerDatabaseDollarIconProps>(
	function TablerDatabaseDollarIcon(props, ref) {
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
				<path d="M4 6v6c0 1.657 3.582 3 8 3c.415 0 .822 -.012 1.22 -.035" />
				<path d="M20 10v-4" />
				<path d="M4 12v6c0 1.657 3.582 3 8 3c.352 0 .698 -.009 1.037 -.025" />
				<path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
				<path d="M19 21v1m0 -8v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDatabaseDollarIcon.displayName = "TablerDatabaseDollarIcon";
}
