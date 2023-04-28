import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceIpadHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceIpadHorizontalIcon = React.forwardRef<SVGSVGElement, TablerDeviceIpadHorizontalIconProps>(
	function TablerDeviceIpadHorizontalIcon(props, ref) {
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
				<path d="M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-12z" />
				<path d="M9 17h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceIpadHorizontalIcon.displayName = "TablerDeviceIpadHorizontalIcon";
}
