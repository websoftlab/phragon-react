import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldDollarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldDollarIcon = React.forwardRef<SVGSVGElement, TablerWorldDollarIconProps>(
	function TablerWorldDollarIcon(props, ref) {
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
				<path d="M20.876 10.51a9 9 0 1 0 -7.839 10.43" />
				<path d="M3.6 9h16.8" />
				<path d="M3.6 15h9.9" />
				<path d="M11.5 3a17 17 0 0 0 0 18" />
				<path d="M12.5 3a16.986 16.986 0 0 1 2.578 9.02" />
				<path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
				<path d="M19 21v1m0 -8v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWorldDollarIcon.displayName = "TablerWorldDollarIcon";
}
