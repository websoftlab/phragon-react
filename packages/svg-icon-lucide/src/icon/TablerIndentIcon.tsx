import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIndentIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIndentIcon = React.forwardRef<SVGSVGElement, TablerIndentIconProps>(function TablerIndentIcon(
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
			<path d="M3 8 L7 12 L3 16" />
			<path d="M21 12 L11 12" />
			<path d="M21 6 L11 6" />
			<path d="M21 18 L11 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerIndentIcon.displayName = "TablerIndentIcon";
}
