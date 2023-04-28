import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZoomResetIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZoomResetIcon = React.forwardRef<SVGSVGElement, TablerZoomResetIconProps>(
	function TablerZoomResetIcon(props, ref) {
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
				<path d="M21 21l-6 -6" />
				<path d="M3.268 12.043a7.017 7.017 0 0 0 6.634 4.957a7.012 7.012 0 0 0 7.043 -6.131a7 7 0 0 0 -5.314 -7.672a7.021 7.021 0 0 0 -8.241 4.403" />
				<path d="M3 4v4h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZoomResetIcon.displayName = "TablerZoomResetIcon";
}
