import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLockAccessOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLockAccessOffIcon = React.forwardRef<SVGSVGElement, TablerLockAccessOffIconProps>(
	function TablerLockAccessOffIcon(props, ref) {
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
				<path d="M4 8v-2c0 -.554 .225 -1.055 .588 -1.417" />
				<path d="M4 16v2a2 2 0 0 0 2 2h2" />
				<path d="M16 4h2a2 2 0 0 1 2 2v2" />
				<path d="M16 20h2c.55 0 1.05 -.222 1.41 -.582" />
				<path d="M15 11a1 1 0 0 1 1 1m-.29 3.704a1 1 0 0 1 -.71 .296h-6a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h2" />
				<path d="M10 11v-1m1.182 -2.826a2 2 0 0 1 2.818 1.826v1" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLockAccessOffIcon.displayName = "TablerLockAccessOffIcon";
}
