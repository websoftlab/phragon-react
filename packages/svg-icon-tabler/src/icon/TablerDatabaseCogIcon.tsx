import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDatabaseCogIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDatabaseCogIcon = React.forwardRef<SVGSVGElement, TablerDatabaseCogIconProps>(
	function TablerDatabaseCogIcon(props, ref) {
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
				<path d="M4 6v6c0 1.657 3.582 3 8 3c.21 0 .42 -.003 .626 -.01" />
				<path d="M20 11.5v-5.5" />
				<path d="M4 12v6c0 1.657 3.582 3 8 3" />
				<path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M19.001 15.5v1.5" />
				<path d="M19.001 21v1.5" />
				<path d="M22.032 17.25l-1.299 .75" />
				<path d="M17.27 20l-1.3 .75" />
				<path d="M15.97 17.25l1.3 .75" />
				<path d="M20.733 20l1.3 .75" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDatabaseCogIcon.displayName = "TablerDatabaseCogIcon";
}
