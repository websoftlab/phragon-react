import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZoomReplaceIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZoomReplaceIcon = React.forwardRef<SVGSVGElement, TablerZoomReplaceIconProps>(
	function TablerZoomReplaceIcon(props, ref) {
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
				<path d="M3.291 8a7 7 0 0 1 5.077 -4.806a7.021 7.021 0 0 1 8.242 4.403" />
				<path d="M17 4v4h-4" />
				<path d="M16.705 12a7 7 0 0 1 -5.074 4.798a7.021 7.021 0 0 1 -8.241 -4.403" />
				<path d="M3 16v-4h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZoomReplaceIcon.displayName = "TablerZoomReplaceIcon";
}
