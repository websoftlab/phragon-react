import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockEditIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockEditIcon = React.forwardRef<SVGSVGElement, TablerClockEditIconProps>(
	function TablerClockEditIcon(props, ref) {
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
				<path d="M21 12a9 9 0 1 0 -9.972 8.948c.32 .034 .644 .052 .972 .052" />
				<path d="M12 7v5l2 2" />
				<path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClockEditIcon.displayName = "TablerClockEditIcon";
}
