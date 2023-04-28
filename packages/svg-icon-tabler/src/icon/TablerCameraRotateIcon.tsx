import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCameraRotateIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCameraRotateIcon = React.forwardRef<SVGSVGElement, TablerCameraRotateIconProps>(
	function TablerCameraRotateIcon(props, ref) {
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
				<path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
				<path d="M11.245 15.904a3 3 0 0 0 3.755 -2.904m-2.25 -2.905a3 3 0 0 0 -3.75 2.905" />
				<path d="M14 13h2v2" />
				<path d="M10 13h-2v-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCameraRotateIcon.displayName = "TablerCameraRotateIcon";
}
