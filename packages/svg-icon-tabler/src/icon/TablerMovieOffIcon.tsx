import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMovieOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMovieOffIcon = React.forwardRef<SVGSVGElement, TablerMovieOffIconProps>(function TablerMovieOffIcon(
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
			<path d="M8 4h10a2 2 0 0 1 2 2v10m-.592 3.42c-.362 .359 -.859 .58 -1.408 .58h-12a2 2 0 0 1 -2 -2v-12c0 -.539 .213 -1.028 .56 -1.388" />
			<path d="M8 8v12" />
			<path d="M16 4v8m0 4v4" />
			<path d="M4 8h4" />
			<path d="M4 16h4" />
			<path d="M4 12h8m4 0h4" />
			<path d="M16 8h4" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMovieOffIcon.displayName = "TablerMovieOffIcon";
}
