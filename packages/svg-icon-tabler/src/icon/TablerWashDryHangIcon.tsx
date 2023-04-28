import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWashDryHangIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWashDryHangIcon = React.forwardRef<SVGSVGElement, TablerWashDryHangIconProps>(
	function TablerWashDryHangIcon(props, ref) {
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
				<path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
				<path d="M4 4.01c5.333 5.323 10.667 5.32 16 -.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWashDryHangIcon.displayName = "TablerWashDryHangIcon";
}
