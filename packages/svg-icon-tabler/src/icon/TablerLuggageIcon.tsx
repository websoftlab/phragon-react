import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLuggageIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLuggageIcon = React.forwardRef<SVGSVGElement, TablerLuggageIconProps>(function TablerLuggageIcon(
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
			<path d="M6 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
			<path d="M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1" />
			<path d="M6 10h12" />
			<path d="M6 16h12" />
			<path d="M9 20v1" />
			<path d="M15 20v1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLuggageIcon.displayName = "TablerLuggageIcon";
}
