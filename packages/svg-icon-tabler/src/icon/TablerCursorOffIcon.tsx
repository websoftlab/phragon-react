import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCursorOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCursorOffIcon = React.forwardRef<SVGSVGElement, TablerCursorOffIconProps>(
	function TablerCursorOffIcon(props, ref) {
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
				<path d="M9 4a3 3 0 0 1 3 3v1m0 9a3 3 0 0 1 -3 3" />
				<path d="M15 4a3 3 0 0 0 -3 3v1m0 4v5a3 3 0 0 0 3 3" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCursorOffIcon.displayName = "TablerCursorOffIcon";
}
