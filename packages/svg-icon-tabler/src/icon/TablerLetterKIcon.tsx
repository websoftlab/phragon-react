import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterKIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterKIcon = React.forwardRef<SVGSVGElement, TablerLetterKIconProps>(function TablerLetterKIcon(
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
			<path d="M7 4l0 16" />
			<path d="M7 12h2l8 -8" />
			<path d="M9 12l8 8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterKIcon.displayName = "TablerLetterKIcon";
}
