import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextCursorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextCursorIcon = React.forwardRef<SVGSVGElement, TablerTextCursorIconProps>(
	function TablerTextCursorIcon(props, ref) {
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
				<path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
				<path d="M7 22h1a4 4 0 0 0 4-4v-1" />
				<path d="M7 2h1a4 4 0 0 1 4 4v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTextCursorIcon.displayName = "TablerTextCursorIcon";
}
