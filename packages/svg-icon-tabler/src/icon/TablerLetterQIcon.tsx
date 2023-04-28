import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterQIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterQIcon = React.forwardRef<SVGSVGElement, TablerLetterQIconProps>(function TablerLetterQIcon(
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
			<path d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-6" />
			<path d="M13 15l5 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterQIcon.displayName = "TablerLetterQIcon";
}
