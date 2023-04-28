import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockShieldIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockShieldIcon = React.forwardRef<SVGSVGElement, TablerClockShieldIconProps>(
	function TablerClockShieldIcon(props, ref) {
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
				<path d="M21 12a9 9 0 1 0 -8.98 9" />
				<path d="M12 7v5l1 1" />
				<path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClockShieldIcon.displayName = "TablerClockShieldIcon";
}
