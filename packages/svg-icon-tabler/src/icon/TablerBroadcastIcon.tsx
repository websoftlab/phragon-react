import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBroadcastIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBroadcastIcon = React.forwardRef<SVGSVGElement, TablerBroadcastIconProps>(
	function TablerBroadcastIcon(props, ref) {
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
				<path d="M18.364 19.364a9 9 0 1 0 -12.728 0" />
				<path d="M15.536 16.536a5 5 0 1 0 -7.072 0" />
				<path d="M12 13m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBroadcastIcon.displayName = "TablerBroadcastIcon";
}
