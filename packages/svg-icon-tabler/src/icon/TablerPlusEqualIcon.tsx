import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlusEqualIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlusEqualIcon = React.forwardRef<SVGSVGElement, TablerPlusEqualIconProps>(
	function TablerPlusEqualIcon(props, ref) {
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
				<path d="M4 7h6" />
				<path d="M7 4v6" />
				<path d="M20 16h-6" />
				<path d="M20 19h-6" />
				<path d="M5 19l14 -14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlusEqualIcon.displayName = "TablerPlusEqualIcon";
}
