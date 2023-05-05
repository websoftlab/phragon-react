import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCameraOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCameraOffIcon = React.forwardRef<SVGSVGElement, TablerCameraOffIconProps>(
	function TablerCameraOffIcon(props, ref) {
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
				<path d="M2 2 L22 22" />
				<path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16" />
				<path d="M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5" />
				<path d="M14.121 15.121A3 3 0 1 1 9.88 10.88" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCameraOffIcon.displayName = "TablerCameraOffIcon";
}
