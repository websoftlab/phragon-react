import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterAIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterAIcon = React.forwardRef<SVGSVGElement, TablerLetterAIconProps>(function TablerLetterAIcon(
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
			<path d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12" />
			<path d="M7 13l10 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterAIcon.displayName = "TablerLetterAIcon";
}
