import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileBadgeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileBadgeIcon = React.forwardRef<SVGSVGElement, TablerFileBadgeIconProps>(
	function TablerFileBadgeIcon(props, ref) {
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
				<path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6" />
				<path d="M14 2 L14 8 L20 8" />
				<path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
				<path d="M7 16.5 8 22l-3-1-3 1 1-5.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileBadgeIcon.displayName = "TablerFileBadgeIcon";
}
