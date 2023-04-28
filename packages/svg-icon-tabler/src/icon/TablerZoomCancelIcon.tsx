import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZoomCancelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZoomCancelIcon = React.forwardRef<SVGSVGElement, TablerZoomCancelIconProps>(
	function TablerZoomCancelIcon(props, ref) {
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
				<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
				<path d="M8 8l4 4" />
				<path d="M12 8l-4 4" />
				<path d="M21 21l-6 -6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZoomCancelIcon.displayName = "TablerZoomCancelIcon";
}
