import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAdCircleOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAdCircleOffIcon = React.forwardRef<SVGSVGElement, TablerAdCircleOffIconProps>(
	function TablerAdCircleOffIcon(props, ref) {
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
				<path d="M4.91 4.949a9.968 9.968 0 0 0 -2.91 7.051c0 5.523 4.477 10 10 10a9.968 9.968 0 0 0 7.05 -2.909" />
				<path d="M20.778 16.793a9.955 9.955 0 0 0 1.222 -4.793c0 -5.523 -4.477 -10 -10 -10c-1.74 0 -3.376 .444 -4.8 1.225" />
				<path d="M7 15v-4.5a1.5 1.5 0 0 1 2.138 -1.358" />
				<path d="M9.854 9.853c.094 .196 .146 .415 .146 .647v4.5" />
				<path d="M7 13h3" />
				<path d="M14 14v1h1" />
				<path d="M17 13v-2a2 2 0 0 0 -2 -2h-1v1" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAdCircleOffIcon.displayName = "TablerAdCircleOffIcon";
}
