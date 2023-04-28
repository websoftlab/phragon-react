import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileFunctionIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileFunctionIcon = React.forwardRef<SVGSVGElement, TablerFileFunctionIconProps>(
	function TablerFileFunctionIcon(props, ref) {
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
				<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
				<path d="M10.5 17h.333c.474 0 .87 -.323 .916 -.746l.502 -4.508c.047 -.423 .443 -.746 .916 -.746h.333" />
				<path d="M10.5 14h3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileFunctionIcon.displayName = "TablerFileFunctionIcon";
}
