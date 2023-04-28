import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMickeyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMickeyIcon = React.forwardRef<SVGSVGElement, TablerMickeyIconProps>(function TablerMickeyIcon(
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
			<path d="M5.5 3a3.5 3.5 0 0 1 3.25 4.8a7.017 7.017 0 0 0 -2.424 2.1a3.5 3.5 0 1 1 -.826 -6.9z" />
			<path d="M18.5 3a3.5 3.5 0 1 1 -.826 6.902a7.013 7.013 0 0 0 -2.424 -2.103a3.5 3.5 0 0 1 3.25 -4.799z" />
			<path d="M12 14m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMickeyIcon.displayName = "TablerMickeyIcon";
}
