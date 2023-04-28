import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockCheckIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockCheckIcon = React.forwardRef<SVGSVGElement, TablerClockCheckIconProps>(
	function TablerClockCheckIcon(props, ref) {
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
				<path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" />
				<path d="M12 7v5l3 3" />
				<path d="M15 19l2 2l4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClockCheckIcon.displayName = "TablerClockCheckIcon";
}
