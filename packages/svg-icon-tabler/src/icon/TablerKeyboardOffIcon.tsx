import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerKeyboardOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerKeyboardOffIcon = React.forwardRef<SVGSVGElement, TablerKeyboardOffIconProps>(
	function TablerKeyboardOffIcon(props, ref) {
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
				<path d="M18 18h-14a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2m4 0h10a2 2 0 0 1 2 2v8c0 .554 -.226 1.056 -.59 1.418" />
				<path d="M6 10l0 .01" />
				<path d="M10 10l0 .01" />
				<path d="M14 10l0 .01" />
				<path d="M18 10l0 .01" />
				<path d="M6 14l0 .01" />
				<path d="M18 14l0 .01" />
				<path d="M10 14l4 0" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerKeyboardOffIcon.displayName = "TablerKeyboardOffIcon";
}
