import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFilmIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFilmIcon = React.forwardRef<SVGSVGElement, TablerFilmIconProps>(function TablerFilmIcon(props, ref) {
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
			<path d="M4.18 2 H19.82 A2.18 2.18 0 0 1 22 4.18 V19.82 A2.18 2.18 0 0 1 19.82 22 H4.18 A2.18 2.18 0 0 1 2 19.82 V4.18 A2.18 2.18 0 0 1 4.18 2 z" />
			<path d="M7 2 L7 22" />
			<path d="M17 2 L17 22" />
			<path d="M2 12 L22 12" />
			<path d="M2 7 L7 7" />
			<path d="M2 17 L7 17" />
			<path d="M17 17 L22 17" />
			<path d="M17 7 L22 7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFilmIcon.displayName = "TablerFilmIcon";
}
