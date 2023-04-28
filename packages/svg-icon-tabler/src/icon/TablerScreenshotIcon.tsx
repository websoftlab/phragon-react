import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerScreenshotIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerScreenshotIcon = React.forwardRef<SVGSVGElement, TablerScreenshotIconProps>(
	function TablerScreenshotIcon(props, ref) {
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
				<path d="M7 19a2 2 0 0 1 -2 -2" />
				<path d="M5 13v-2" />
				<path d="M5 7a2 2 0 0 1 2 -2" />
				<path d="M11 5h2" />
				<path d="M17 5a2 2 0 0 1 2 2" />
				<path d="M19 11v2" />
				<path d="M19 17v4" />
				<path d="M21 19h-4" />
				<path d="M13 19h-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerScreenshotIcon.displayName = "TablerScreenshotIcon";
}
