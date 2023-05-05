import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShieldAlertIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShieldAlertIcon = React.forwardRef<SVGSVGElement, TablerShieldAlertIconProps>(
	function TablerShieldAlertIcon(props, ref) {
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
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
				<path d="M12 8v4" />
				<path d="M12 16h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerShieldAlertIcon.displayName = "TablerShieldAlertIcon";
}
