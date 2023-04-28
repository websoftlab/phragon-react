import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChartDonut4IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChartDonut4Icon = React.forwardRef<SVGSVGElement, TablerChartDonut4IconProps>(
	function TablerChartDonut4Icon(props, ref) {
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
				<path d="M8.848 14.667l-3.348 2.833" />
				<path d="M12 3v5m4 4h5" />
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M14.219 15.328l2.781 4.172" />
				<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChartDonut4Icon.displayName = "TablerChartDonut4Icon";
}
