import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherHardDriveIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherHardDriveIcon = React.forwardRef<SVGSVGElement, FeatherHardDriveIconProps>(
	function FeatherHardDriveIcon(props, ref) {
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
				<line x1="22" y1="12" x2="2" y2="12" />
				<path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
				<line x1="6" y1="16" x2="6.01" y2="16" />
				<line x1="10" y1="16" x2="10.01" y2="16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherHardDriveIcon.displayName = "FeatherHardDriveIcon";
}
