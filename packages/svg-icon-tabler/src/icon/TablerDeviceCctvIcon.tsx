import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceCctvIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceCctvIcon = React.forwardRef<SVGSVGElement, TablerDeviceCctvIconProps>(
	function TablerDeviceCctvIcon(props, ref) {
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
				<path d="M3 3m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
				<path d="M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
				<path d="M19 7v7a7 7 0 0 1 -14 0v-7" />
				<path d="M12 14l.01 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceCctvIcon.displayName = "TablerDeviceCctvIcon";
}
