import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLassoSelectIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLassoSelectIcon = React.forwardRef<SVGSVGElement, TablerLassoSelectIconProps>(
	function TablerLassoSelectIcon(props, ref) {
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
				<path d="M7 22a5 5 0 0 1-2-4" />
				<path d="M7 16.93c.96.43 1.96.74 2.99.91" />
				<path d="M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" />
				<path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
				<path d="M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLassoSelectIcon.displayName = "TablerLassoSelectIcon";
}
