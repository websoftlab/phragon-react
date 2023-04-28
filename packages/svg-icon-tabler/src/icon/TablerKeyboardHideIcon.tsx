import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerKeyboardHideIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerKeyboardHideIcon = React.forwardRef<SVGSVGElement, TablerKeyboardHideIconProps>(
	function TablerKeyboardHideIcon(props, ref) {
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
				<path d="M2 3m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
				<path d="M6 7l0 .01" />
				<path d="M10 7l0 .01" />
				<path d="M14 7l0 .01" />
				<path d="M18 7l0 .01" />
				<path d="M6 11l0 .01" />
				<path d="M18 11l0 .01" />
				<path d="M10 11l4 0" />
				<path d="M10 21l2 -2l2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerKeyboardHideIcon.displayName = "TablerKeyboardHideIcon";
}
