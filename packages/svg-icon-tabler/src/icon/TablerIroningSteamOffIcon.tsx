import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIroningSteamOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIroningSteamOffIcon = React.forwardRef<SVGSVGElement, TablerIroningSteamOffIconProps>(
	function TablerIroningSteamOffIcon(props, ref) {
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
				<path d="M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.821 1.15" />
				<path d="M16 16h-13a7 7 0 0 1 6.056 -6.937" />
				<path d="M13 9h6.8" />
				<path d="M12 19v2" />
				<path d="M8 19l-1 2" />
				<path d="M16 19l1 2" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerIroningSteamOffIcon.displayName = "TablerIroningSteamOffIcon";
}
