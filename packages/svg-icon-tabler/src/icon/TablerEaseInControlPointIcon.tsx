import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEaseInControlPointIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEaseInControlPointIcon = React.forwardRef<SVGSVGElement, TablerEaseInControlPointIconProps>(
	function TablerEaseInControlPointIcon(props, ref) {
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
				<path d="M3 19c8 0 18 -16 18 -16" />
				<path d="M17 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0z" />
				<path d="M17 19h-2" />
				<path d="M12 19h-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerEaseInControlPointIcon.displayName = "TablerEaseInControlPointIcon";
}
