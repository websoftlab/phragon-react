import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLanguageOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLanguageOffIcon = React.forwardRef<SVGSVGElement, TablerLanguageOffIconProps>(
	function TablerLanguageOffIcon(props, ref) {
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
				<path d="M4 5h1m4 0h2" />
				<path d="M9 3v2m-.508 3.517c-.814 2.655 -2.52 4.483 -4.492 4.483" />
				<path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
				<path d="M12 20l2.463 -5.541m1.228 -2.764l.309 -.695l.8 1.8" />
				<path d="M18 18h-5.1" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLanguageOffIcon.displayName = "TablerLanguageOffIcon";
}
