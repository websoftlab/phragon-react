import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMapPinCheckIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMapPinCheckIcon = React.forwardRef<SVGSVGElement, TablerMapPinCheckIconProps>(
	function TablerMapPinCheckIcon(props, ref) {
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
				<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
				<path d="M11.87 21.48a1.992 1.992 0 0 1 -1.283 -.58l-4.244 -4.243a8 8 0 1 1 13.355 -3.474" />
				<path d="M15 19l2 2l4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMapPinCheckIcon.displayName = "TablerMapPinCheckIcon";
}
