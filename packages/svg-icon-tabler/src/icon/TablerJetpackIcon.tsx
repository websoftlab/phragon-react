import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerJetpackIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerJetpackIcon = React.forwardRef<SVGSVGElement, TablerJetpackIconProps>(function TablerJetpackIcon(
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
			<path d="M10 6a3 3 0 1 0 -6 0v7h6v-7z" />
			<path d="M14 13h6v-7a3 3 0 0 0 -6 0v7z" />
			<path d="M5 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" />
			<path d="M15 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" />
			<path d="M10 8h4" />
			<path d="M10 11h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerJetpackIcon.displayName = "TablerJetpackIcon";
}
