import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockDollarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockDollarIcon = React.forwardRef<SVGSVGElement, TablerClockDollarIconProps>(
	function TablerClockDollarIcon(props, ref) {
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
				<path d="M20.866 10.45a9 9 0 1 0 -7.815 10.488" />
				<path d="M12 7v5l1.5 1.5" />
				<path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
				<path d="M19 21v1m0 -8v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClockDollarIcon.displayName = "TablerClockDollarIcon";
}
