import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceMobileMessageIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceMobileMessageIcon = React.forwardRef<SVGSVGElement, TablerDeviceMobileMessageIconProps>(
	function TablerDeviceMobileMessageIcon(props, ref) {
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
				<path d="M11 3h10v8h-3l-4 2v-2h-3z" />
				<path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2" />
				<path d="M10 18v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceMobileMessageIcon.displayName = "TablerDeviceMobileMessageIcon";
}
