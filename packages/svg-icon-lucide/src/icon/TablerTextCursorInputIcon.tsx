import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextCursorInputIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextCursorInputIcon = React.forwardRef<SVGSVGElement, TablerTextCursorInputIconProps>(
	function TablerTextCursorInputIcon(props, ref) {
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
				<path d="M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1" />
				<path d="M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5" />
				<path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" />
				<path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" />
				<path d="M9 7v10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTextCursorInputIcon.displayName = "TablerTextCursorInputIcon";
}
