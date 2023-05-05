import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMonitorOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMonitorOffIcon = React.forwardRef<SVGSVGElement, TablerMonitorOffIconProps>(
	function TablerMonitorOffIcon(props, ref) {
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
				<path d="M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" />
				<path d="M22 15V5a2 2 0 0 0-2-2H9" />
				<path d="M8 21h8" />
				<path d="M12 17v4" />
				<path d="m2 2 20 20" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMonitorOffIcon.displayName = "TablerMonitorOffIcon";
}
