import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHierarchy3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHierarchy3Icon = React.forwardRef<SVGSVGElement, TablerHierarchy3IconProps>(
	function TablerHierarchy3Icon(props, ref) {
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
				<path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M12 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M20 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M4 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M5 17l2 -3" />
				<path d="M9 10l2 -3" />
				<path d="M13 7l2 3" />
				<path d="M17 14l2 3" />
				<path d="M15 14l-2 3" />
				<path d="M9 14l2 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHierarchy3Icon.displayName = "TablerHierarchy3Icon";
}
