import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEaseInOutIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEaseInOutIcon = React.forwardRef<SVGSVGElement, TablerEaseInOutIconProps>(
	function TablerEaseInOutIcon(props, ref) {
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
				<path d="M3 20c8 0 10 -16 18 -16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerEaseInOutIcon.displayName = "TablerEaseInOutIcon";
}
