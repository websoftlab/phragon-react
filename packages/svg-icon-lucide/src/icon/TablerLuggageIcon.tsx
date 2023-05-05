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
			<path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0" />
			<path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
			<path d="M10 20h4" />
			<path d="M18 20 A2 2 0 0 1 16 22 A2 2 0 0 1 14 20 A2 2 0 0 1 18 20" />
			<path d="M10 20 A2 2 0 0 1 8 22 A2 2 0 0 1 6 20 A2 2 0 0 1 10 20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLuggageIcon.displayName = "TablerLuggageIcon";
}
