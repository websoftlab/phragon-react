import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextSelectIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextSelectIcon = React.forwardRef<SVGSVGElement, TablerTextSelectIconProps>(
	function TablerTextSelectIcon(props, ref) {
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
				<path d="M5 3a2 2 0 0 0-2 2" />
				<path d="M19 3a2 2 0 0 1 2 2" />
				<path d="M21 19a2 2 0 0 1-2 2" />
				<path d="M5 21a2 2 0 0 1-2-2" />
				<path d="M9 3h1" />
				<path d="M9 21h1" />
				<path d="M14 3h1" />
				<path d="M14 21h1" />
				<path d="M3 9v1" />
				<path d="M21 9v1" />
				<path d="M3 14v1" />
				<path d="M21 14v1" />
				<path d="M7 8 L15 8" />
				<path d="M7 12 L17 12" />
				<path d="M7 16 L13 16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTextSelectIcon.displayName = "TablerTextSelectIcon";
}
