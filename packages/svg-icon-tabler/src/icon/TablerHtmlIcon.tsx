import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHtmlIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHtmlIcon = React.forwardRef<SVGSVGElement, TablerHtmlIconProps>(function TablerHtmlIcon(props, ref) {
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
			<path d="M13 16v-8l2 5l2 -5v8" />
			<path d="M1 16v-8" />
			<path d="M5 8v8" />
			<path d="M1 12h4" />
			<path d="M7 8h4" />
			<path d="M9 8v8" />
			<path d="M20 8v8h3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHtmlIcon.displayName = "TablerHtmlIcon";
}
