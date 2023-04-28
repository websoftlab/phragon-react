import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEyeglassOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEyeglassOffIcon = React.forwardRef<SVGSVGElement, TablerEyeglassOffIconProps>(
	function TablerEyeglassOffIcon(props, ref) {
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
				<path d="M5.536 5.546l-2.536 8.454" />
				<path d="M16 4h2l3 10" />
				<path d="M10 16h4" />
				<path d="M19.426 19.423a3.5 3.5 0 0 1 -5.426 -2.923v-2.5m4 0h3v2.5c0 .157 -.01 .312 -.03 .463" />
				<path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerEyeglassOffIcon.displayName = "TablerEyeglassOffIcon";
}
