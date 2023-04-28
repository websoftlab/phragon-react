import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClearFormattingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClearFormattingIcon = React.forwardRef<SVGSVGElement, TablerClearFormattingIconProps>(
	function TablerClearFormattingIcon(props, ref) {
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
				<path d="M17 15l4 4m0 -4l-4 4" />
				<path d="M7 6v-1h11v1" />
				<path d="M7 19l4 0" />
				<path d="M13 5l-4 14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClearFormattingIcon.displayName = "TablerClearFormattingIcon";
}
