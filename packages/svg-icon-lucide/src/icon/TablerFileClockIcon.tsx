import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileClockIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileClockIcon = React.forwardRef<SVGSVGElement, TablerFileClockIconProps>(
	function TablerFileClockIcon(props, ref) {
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
				<path d="M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3" />
				<path d="M14 2 L14 8 L20 8" />
				<path d="M14 16 A6 6 0 0 1 8 22 A6 6 0 0 1 2 16 A6 6 0 0 1 14 16" />
				<path d="M9.5 17.5 8 16.25V14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileClockIcon.displayName = "TablerFileClockIcon";
}
