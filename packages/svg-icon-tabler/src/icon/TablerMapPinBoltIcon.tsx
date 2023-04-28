import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMapPinBoltIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMapPinBoltIcon = React.forwardRef<SVGSVGElement, TablerMapPinBoltIconProps>(
	function TablerMapPinBoltIcon(props, ref) {
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
				<path d="M13.414 20.9a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 13.591 -4.629" />
				<path d="M19 16l-2 3h4l-2 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMapPinBoltIcon.displayName = "TablerMapPinBoltIcon";
}
