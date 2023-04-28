import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockMinusIcon = React.forwardRef<SVGSVGElement, TablerClockMinusIconProps>(
	function TablerClockMinusIcon(props, ref) {
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
				<path d="M20.477 15.022a9 9 0 1 0 -7.998 5.965" />
				<path d="M12 7v5l3 3" />
				<path d="M16 19h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClockMinusIcon.displayName = "TablerClockMinusIcon";
}
