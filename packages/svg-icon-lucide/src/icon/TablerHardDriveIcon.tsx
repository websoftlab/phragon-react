import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHardDriveIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHardDriveIcon = React.forwardRef<SVGSVGElement, TablerHardDriveIconProps>(
	function TablerHardDriveIcon(props, ref) {
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
				<path d="M22 12 L2 12" />
				<path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
				<path d="M6 16 L6.01 16" />
				<path d="M10 16 L10.01 16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHardDriveIcon.displayName = "TablerHardDriveIcon";
}
