import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileBrokenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileBrokenIcon = React.forwardRef<SVGSVGElement, TablerFileBrokenIconProps>(
	function TablerFileBrokenIcon(props, ref) {
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
				<path d="M14 3v4a1 1 0 0 0 1 1h4" />
				<path d="M5 7v-2a2 2 0 0 1 2 -2h7l5 5v2" />
				<path d="M19 19a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2" />
				<path d="M5 16h.01" />
				<path d="M5 13h.01" />
				<path d="M5 10h.01" />
				<path d="M19 13h.01" />
				<path d="M19 16h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileBrokenIcon.displayName = "TablerFileBrokenIcon";
}
