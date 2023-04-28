import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPhotoSensorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPhotoSensorIcon = React.forwardRef<SVGSVGElement, TablerPhotoSensorIconProps>(
	function TablerPhotoSensorIcon(props, ref) {
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
				<path d="M17 5h2a2 2 0 0 1 2 2v2" />
				<path d="M21 15v2a2 2 0 0 1 -2 2h-2" />
				<path d="M7 19h-2a2 2 0 0 1 -2 -2v-2" />
				<path d="M3 9v-2a2 2 0 0 1 2 -2h2" />
				<path d="M7 9m0 1a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPhotoSensorIcon.displayName = "TablerPhotoSensorIcon";
}
