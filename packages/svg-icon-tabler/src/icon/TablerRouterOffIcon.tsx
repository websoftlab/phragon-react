import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRouterOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRouterOffIcon = React.forwardRef<SVGSVGElement, TablerRouterOffIconProps>(
	function TablerRouterOffIcon(props, ref) {
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
				<path d="M17 13h2a2 2 0 0 1 2 2v2m-.588 3.417c-.362 .36 -.861 .583 -1.412 .583h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h8" />
				<path d="M17 17v.01" />
				<path d="M13 17v.01" />
				<path d="M12.226 8.2a4 4 0 0 1 6.024 .55" />
				<path d="M9.445 5.407a8 8 0 0 1 12.055 1.093" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRouterOffIcon.displayName = "TablerRouterOffIcon";
}
