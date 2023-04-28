import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerParenthesesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerParenthesesIcon = React.forwardRef<SVGSVGElement, TablerParenthesesIconProps>(
	function TablerParenthesesIcon(props, ref) {
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
				<path d="M7 4a12.25 12.25 0 0 0 0 16" />
				<path d="M17 4a12.25 12.25 0 0 1 0 16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerParenthesesIcon.displayName = "TablerParenthesesIcon";
}
