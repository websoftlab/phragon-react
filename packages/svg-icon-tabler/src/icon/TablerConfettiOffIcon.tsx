import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerConfettiOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerConfettiOffIcon = React.forwardRef<SVGSVGElement, TablerConfettiOffIconProps>(
	function TablerConfettiOffIcon(props, ref) {
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
				<path d="M4 5h1" />
				<path d="M5 5v1" />
				<path d="M11.5 4l-.5 2" />
				<path d="M18 5h2" />
				<path d="M19 4v2" />
				<path d="M15 9l-1 1" />
				<path d="M18 13l2 -.5" />
				<path d="M18 19h1" />
				<path d="M19 19v1" />
				<path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39v0z" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerConfettiOffIcon.displayName = "TablerConfettiOffIcon";
}
