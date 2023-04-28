import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterDIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterDIcon = React.forwardRef<SVGSVGElement, TablerLetterDIconProps>(function TablerLetterDIcon(
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
			<path d="M7 4h6a5 5 0 0 1 5 5v6a5 5 0 0 1 -5 5h-6v-16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterDIcon.displayName = "TablerLetterDIcon";
}
