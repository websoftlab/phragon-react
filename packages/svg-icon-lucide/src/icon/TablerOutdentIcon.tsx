import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerOutdentIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerOutdentIcon = React.forwardRef<SVGSVGElement, TablerOutdentIconProps>(function TablerOutdentIcon(
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
			<path d="M7 8 L3 12 L7 16" />
			<path d="M21 12 L11 12" />
			<path d="M21 6 L11 6" />
			<path d="M21 18 L11 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerOutdentIcon.displayName = "TablerOutdentIcon";
}
