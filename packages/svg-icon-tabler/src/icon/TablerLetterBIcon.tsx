import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterBIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterBIcon = React.forwardRef<SVGSVGElement, TablerLetterBIconProps>(function TablerLetterBIcon(
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
			<path d="M7 20v-16h6a4 4 0 0 1 0 8a4 4 0 0 1 0 8h-6" />
			<path d="M7 12l6 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterBIcon.displayName = "TablerLetterBIcon";
}
