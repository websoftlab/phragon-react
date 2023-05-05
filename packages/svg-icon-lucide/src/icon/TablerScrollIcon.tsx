import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerScrollIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerScrollIcon = React.forwardRef<SVGSVGElement, TablerScrollIconProps>(function TablerScrollIcon(
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
			<path d="M10 17v2a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v3h3" />
			<path d="M22 17v2a2 2 0 0 1-2 2H8" />
			<path d="M19 17V5a2 2 0 0 0-2-2H4" />
			<path d="M22 17H10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerScrollIcon.displayName = "TablerScrollIcon";
}
