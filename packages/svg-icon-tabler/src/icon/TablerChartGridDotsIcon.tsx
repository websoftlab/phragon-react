import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartGridDotsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartGridDotsIcon = React.forwardRef<SVGSVGElement, TablerChartGridDotsIconProps>(
	function TablerChartGridDotsIcon(props, ref) {
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
				<path d="M18 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M6 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M8 18h8" />
				<path d="M18 20v1" />
				<path d="M18 3v1" />
				<path d="M6 20v1" />
				<path d="M6 10v-7" />
				<path d="M12 3v18" />
				<path d="M18 8v8" />
				<path d="M8 12h13" />
				<path d="M21 6h-1" />
				<path d="M16 6h-13" />
				<path d="M3 12h1" />
				<path d="M20 18h1" />
				<path d="M3 18h1" />
				<path d="M6 14v2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChartGridDotsIcon.displayName = "TablerChartGridDotsIcon";
}
