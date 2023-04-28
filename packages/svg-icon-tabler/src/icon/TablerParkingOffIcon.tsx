import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerParkingOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerParkingOffIcon = React.forwardRef<SVGSVGElement, TablerParkingOffIconProps>(
	function TablerParkingOffIcon(props, ref) {
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
				<path d="M8 4h10a2 2 0 0 1 2 2v10m-.582 3.41c-.362 .365 -.864 .59 -1.418 .59h-12a2 2 0 0 1 -2 -2v-12c0 -.554 .225 -1.056 .59 -1.418" />
				<path d="M9 16v-7m3 -1h1a2 2 0 0 1 1.817 2.836m-2.817 1.164h-3" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerParkingOffIcon.displayName = "TablerParkingOffIcon";
}
