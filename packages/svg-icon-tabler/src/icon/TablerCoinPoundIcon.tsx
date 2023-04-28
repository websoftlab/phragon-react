import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCoinPoundIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCoinPoundIcon = React.forwardRef<SVGSVGElement, TablerCoinPoundIconProps>(
	function TablerCoinPoundIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M15 9a2 2 0 1 0 -4 0v5a2 2 0 0 1 -2 2h6" />
				<path d="M9 12h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCoinPoundIcon.displayName = "TablerCoinPoundIcon";
}
