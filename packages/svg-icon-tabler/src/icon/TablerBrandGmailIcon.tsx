import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandGmailIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandGmailIcon = React.forwardRef<SVGSVGElement, TablerBrandGmailIconProps>(
	function TablerBrandGmailIcon(props, ref) {
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
				<path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" />
				<path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" />
				<path d="M16 4l-4 4l-4 -4" />
				<path d="M4 6.5l8 7.5l8 -7.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandGmailIcon.displayName = "TablerBrandGmailIcon";
}
