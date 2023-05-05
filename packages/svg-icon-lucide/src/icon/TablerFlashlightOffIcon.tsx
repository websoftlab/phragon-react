import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlashlightOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlashlightOffIcon = React.forwardRef<SVGSVGElement, TablerFlashlightOffIconProps>(
	function TablerFlashlightOffIcon(props, ref) {
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
				<path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4" />
				<path d="M7 2h11v4c0 2-2 2-2 4v1" />
				<path d="M11 6 L18 6" />
				<path d="M2 2 L22 22" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFlashlightOffIcon.displayName = "TablerFlashlightOffIcon";
}
