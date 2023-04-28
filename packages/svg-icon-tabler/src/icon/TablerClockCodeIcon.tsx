import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockCodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockCodeIcon = React.forwardRef<SVGSVGElement, TablerClockCodeIconProps>(
	function TablerClockCodeIcon(props, ref) {
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
				<path d="M20.931 13.111a9 9 0 1 0 -9.453 7.874" />
				<path d="M20 21l2 -2l-2 -2" />
				<path d="M17 17l-2 2l2 2" />
				<path d="M12 7v5l2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClockCodeIcon.displayName = "TablerClockCodeIcon";
}
