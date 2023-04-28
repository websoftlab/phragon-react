import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathPiIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathPiIcon = React.forwardRef<SVGSVGElement, TablerMathPiIconProps>(function TablerMathPiIcon(
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
			<path d="M7 20v-16" />
			<path d="M17 4v16" />
			<path d="M20 4h-16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMathPiIcon.displayName = "TablerMathPiIcon";
}
