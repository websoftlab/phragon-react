import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLockPauseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLockPauseIcon = React.forwardRef<SVGSVGElement, TablerLockPauseIconProps>(
	function TablerLockPauseIcon(props, ref) {
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
				<path d="M13 21h-6a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v.5" />
				<path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
				<path d="M8 11v-4a4 4 0 1 1 8 0v4" />
				<path d="M17 17v5" />
				<path d="M21 17v5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLockPauseIcon.displayName = "TablerLockPauseIcon";
}
