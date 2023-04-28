import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathNotIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathNotIcon = React.forwardRef<SVGSVGElement, TablerMathNotIconProps>(function TablerMathNotIcon(
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
			<path d="M5 12h14v4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMathNotIcon.displayName = "TablerMathNotIcon";
}
