import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZoomMoneyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZoomMoneyIcon = React.forwardRef<SVGSVGElement, TablerZoomMoneyIconProps>(
	function TablerZoomMoneyIcon(props, ref) {
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
				<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
				<path d="M21 21l-6 -6" />
				<path d="M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
				<path d="M10 13v1m0 -8v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZoomMoneyIcon.displayName = "TablerZoomMoneyIcon";
}
