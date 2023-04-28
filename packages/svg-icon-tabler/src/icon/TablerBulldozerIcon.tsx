import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBulldozerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBulldozerIcon = React.forwardRef<SVGSVGElement, TablerBulldozerIconProps>(
	function TablerBulldozerIcon(props, ref) {
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
				<path d="M2 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
				<path d="M12 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
				<path d="M19 13v4a2 2 0 0 0 2 2h1" />
				<path d="M14 19h-10" />
				<path d="M4 15h10" />
				<path d="M9 11v-5h2a3 3 0 0 1 3 3v6" />
				<path d="M5 15v-3a1 1 0 0 1 1 -1h8" />
				<path d="M19 17h-3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBulldozerIcon.displayName = "TablerBulldozerIcon";
}
