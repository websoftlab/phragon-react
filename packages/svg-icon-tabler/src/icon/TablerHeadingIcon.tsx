import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHeadingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHeadingIcon = React.forwardRef<SVGSVGElement, TablerHeadingIconProps>(function TablerHeadingIcon(
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
			<path d="M7 12h10" />
			<path d="M7 5v14" />
			<path d="M17 5v14" />
			<path d="M15 19h4" />
			<path d="M15 5h4" />
			<path d="M5 19h4" />
			<path d="M5 5h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHeadingIcon.displayName = "TablerHeadingIcon";
}
