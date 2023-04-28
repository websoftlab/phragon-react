import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSwitchHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSwitchHorizontalIcon = React.forwardRef<SVGSVGElement, TablerSwitchHorizontalIconProps>(
	function TablerSwitchHorizontalIcon(props, ref) {
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
				<path d="M16 3l4 4l-4 4" />
				<path d="M10 7l10 0" />
				<path d="M8 13l-4 4l4 4" />
				<path d="M4 17l9 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSwitchHorizontalIcon.displayName = "TablerSwitchHorizontalIcon";
}
