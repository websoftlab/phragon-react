import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFishHookOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFishHookOffIcon = React.forwardRef<SVGSVGElement, TablerFishHookOffIconProps>(
	function TablerFishHookOffIcon(props, ref) {
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
				<path d="M16 9v3m-.085 3.924a5 5 0 0 1 -9.915 -.924v-4l3 3" />
				<path d="M16 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M16 5v-2" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFishHookOffIcon.displayName = "TablerFishHookOffIcon";
}
