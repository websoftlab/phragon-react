import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLifebuoyOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLifebuoyOffIcon = React.forwardRef<SVGSVGElement, TablerLifebuoyOffIconProps>(
	function TablerLifebuoyOffIcon(props, ref) {
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
				<path d="M9.171 9.172a4 4 0 0 0 5.65 5.663m1.179 -2.835a4 4 0 0 0 -4 -4" />
				<path d="M5.64 5.632a9 9 0 1 0 12.73 12.725m1.667 -2.301a9 9 0 0 0 -12.077 -12.1" />
				<path d="M15 15l3.35 3.35" />
				<path d="M9 15l-3.35 3.35" />
				<path d="M5.65 5.65l3.35 3.35" />
				<path d="M18.35 5.65l-3.35 3.35" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLifebuoyOffIcon.displayName = "TablerLifebuoyOffIcon";
}
