import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMapPinPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMapPinPlusIcon = React.forwardRef<SVGSVGElement, TablerMapPinPlusIconProps>(
	function TablerMapPinPlusIcon(props, ref) {
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
				<path d="M12.794 21.322a2 2 0 0 1 -2.207 -.422l-4.244 -4.243a8 8 0 1 1 13.59 -4.616" />
				<path d="M16 19h6" />
				<path d="M19 16v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMapPinPlusIcon.displayName = "TablerMapPinPlusIcon";
}
