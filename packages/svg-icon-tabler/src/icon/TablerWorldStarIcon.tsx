import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldStarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldStarIcon = React.forwardRef<SVGSVGElement, TablerWorldStarIconProps>(
	function TablerWorldStarIcon(props, ref) {
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
				<path d="M21 12a9 9 0 1 0 -9.968 8.948" />
				<path d="M3.6 9h16.8" />
				<path d="M3.6 15h6.4" />
				<path d="M11.5 3a17.001 17.001 0 0 0 -1.886 13.802" />
				<path d="M12.5 3a16.982 16.982 0 0 1 2.549 8.01" />
				<path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWorldStarIcon.displayName = "TablerWorldStarIcon";
}
