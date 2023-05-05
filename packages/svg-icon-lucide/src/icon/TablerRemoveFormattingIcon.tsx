import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRemoveFormattingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRemoveFormattingIcon = React.forwardRef<SVGSVGElement, TablerRemoveFormattingIconProps>(
	function TablerRemoveFormattingIcon(props, ref) {
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
				<path d="M4 7V4h16v3" />
				<path d="M5 20h6" />
				<path d="M13 4 8 20" />
				<path d="m15 15 5 5" />
				<path d="m20 15-5 5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRemoveFormattingIcon.displayName = "TablerRemoveFormattingIcon";
}
