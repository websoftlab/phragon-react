import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCaptureOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCaptureOffIcon = React.forwardRef<SVGSVGElement, TablerCaptureOffIconProps>(
	function TablerCaptureOffIcon(props, ref) {
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
				<path d="M4 16v2a2 2 0 0 0 2 2h2" />
				<path d="M16 4h2a2 2 0 0 1 2 2v2" />
				<path d="M16 20h2c.554 0 1.055 -.225 1.417 -.589" />
				<path d="M9.87 9.887a3 3 0 0 0 4.255 4.23m.58 -3.416a3.012 3.012 0 0 0 -1.4 -1.403" />
				<path d="M4 8v-2c0 -.548 .22 -1.044 .577 -1.405" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCaptureOffIcon.displayName = "TablerCaptureOffIcon";
}
