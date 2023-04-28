import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMovieIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMovieIcon = React.forwardRef<SVGSVGElement, TablerMovieIconProps>(function TablerMovieIcon(
	props,
	ref
) {
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
			<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
			<path d="M8 4l0 16" />
			<path d="M16 4l0 16" />
			<path d="M4 8l4 0" />
			<path d="M4 16l4 0" />
			<path d="M4 12l16 0" />
			<path d="M16 8l4 0" />
			<path d="M16 16l4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMovieIcon.displayName = "TablerMovieIcon";
}
