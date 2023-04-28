import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerToolsKitchenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerToolsKitchenIcon = React.forwardRef<SVGSVGElement, TablerToolsKitchenIconProps>(
	function TablerToolsKitchenIcon(props, ref) {
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
				<path d="M4 3h8l-1 9h-6z" />
				<path d="M7 18h2v3h-2z" />
				<path d="M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z" />
				<path d="M20 15v6h-1v-3" />
				<path d="M8 12l0 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerToolsKitchenIcon.displayName = "TablerToolsKitchenIcon";
}
