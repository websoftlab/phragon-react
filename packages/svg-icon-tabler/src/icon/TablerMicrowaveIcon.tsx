import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMicrowaveIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMicrowaveIcon = React.forwardRef<SVGSVGElement, TablerMicrowaveIconProps>(
	function TablerMicrowaveIcon(props, ref) {
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
				<path d="M3 6m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
				<path d="M15 6v12" />
				<path d="M18 12h.01" />
				<path d="M18 15h.01" />
				<path d="M18 9h.01" />
				<path d="M6.5 10.5c1 -.667 1.5 -.667 2.5 0c.833 .347 1.667 .926 2.5 0" />
				<path d="M6.5 13.5c1 -.667 1.5 -.667 2.5 0c.833 .347 1.667 .926 2.5 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMicrowaveIcon.displayName = "TablerMicrowaveIcon";
}
