import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerToolsKitchenOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerToolsKitchenOffIcon = React.forwardRef<SVGSVGElement, TablerToolsKitchenOffIconProps>(
	function TablerToolsKitchenOffIcon(props, ref) {
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
				<path d="M7 3h5l-.5 4.5m-.4 3.595l-.1 .905h-6l-.875 -7.874" />
				<path d="M7 18h2v3h-2z" />
				<path d="M15.225 11.216c.42 -2.518 1.589 -5.177 4.775 -8.216v12h-1" />
				<path d="M20 15v1m0 4v1h-1v-2" />
				<path d="M8 12v6" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerToolsKitchenOffIcon.displayName = "TablerToolsKitchenOffIcon";
}
