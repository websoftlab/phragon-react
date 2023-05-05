import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSwitchCameraIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSwitchCameraIcon = React.forwardRef<SVGSVGElement, TablerSwitchCameraIconProps>(
	function TablerSwitchCameraIcon(props, ref) {
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
				<path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
				<path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
				<path d="M15 12 A3 3 0 0 1 12 15 A3 3 0 0 1 9 12 A3 3 0 0 1 15 12" />
				<path d="m18 22-3-3 3-3" />
				<path d="m6 2 3 3-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSwitchCameraIcon.displayName = "TablerSwitchCameraIcon";
}
