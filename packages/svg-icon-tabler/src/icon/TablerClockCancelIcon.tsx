import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockCancelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockCancelIcon = React.forwardRef<SVGSVGElement, TablerClockCancelIconProps>(
	function TablerClockCancelIcon(props, ref) {
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
				<path d="M20.997 12.25a9 9 0 1 0 -8.718 8.745" />
				<path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M17 21l4 -4" />
				<path d="M12 7v5l2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClockCancelIcon.displayName = "TablerClockCancelIcon";
}
