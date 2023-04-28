import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCameraSelfieIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCameraSelfieIcon = React.forwardRef<SVGSVGElement, TablerCameraSelfieIconProps>(
	function TablerCameraSelfieIcon(props, ref) {
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
				<path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
				<path d="M15 11l.01 0" />
				<path d="M9 11l.01 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCameraSelfieIcon.displayName = "TablerCameraSelfieIcon";
}
