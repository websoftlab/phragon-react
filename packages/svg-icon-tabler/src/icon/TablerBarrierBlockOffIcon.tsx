import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBarrierBlockOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBarrierBlockOffIcon = React.forwardRef<SVGSVGElement, TablerBarrierBlockOffIconProps>(
	function TablerBarrierBlockOffIcon(props, ref) {
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
				<path d="M11 7h8a1 1 0 0 1 1 1v7c0 .27 -.107 .516 -.282 .696" />
				<path d="M16 16h-11a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h2" />
				<path d="M7 16v4" />
				<path d="M7.5 16l4.244 -4.244" />
				<path d="M13.745 9.755l2.755 -2.755" />
				<path d="M13.5 16l1.249 -1.249" />
				<path d="M16.741 12.759l3.259 -3.259" />
				<path d="M4 13.5l4.752 -4.752" />
				<path d="M17 17v3" />
				<path d="M5 20h4" />
				<path d="M15 20h4" />
				<path d="M17 7v-2" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBarrierBlockOffIcon.displayName = "TablerBarrierBlockOffIcon";
}
