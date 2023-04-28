import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurlyLoopIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurlyLoopIcon = React.forwardRef<SVGSVGElement, TablerCurlyLoopIconProps>(
	function TablerCurlyLoopIcon(props, ref) {
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
				<path d="M21 8c-4 0 -7 2 -7 5a3 3 0 0 0 6 0c0 -3 -2.5 -5 -8 -5s-8 2 -8 5a3 3 0 0 0 6 0c0 -3 -3 -5 -7 -5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurlyLoopIcon.displayName = "TablerCurlyLoopIcon";
}
