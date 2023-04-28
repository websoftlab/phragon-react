import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIroningSteamIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIroningSteamIcon = React.forwardRef<SVGSVGElement, TablerIroningSteamIconProps>(
	function TablerIroningSteamIcon(props, ref) {
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
				<path d="M12 19v2" />
				<path d="M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.985 1.164h-16.82a7 7 0 0 1 7 -7h9.8" />
				<path d="M8 19l-1 2" />
				<path d="M16 19l1 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerIroningSteamIcon.displayName = "TablerIroningSteamIcon";
}
