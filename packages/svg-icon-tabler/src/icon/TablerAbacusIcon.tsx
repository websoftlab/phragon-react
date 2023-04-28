import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAbacusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAbacusIcon = React.forwardRef<SVGSVGElement, TablerAbacusIconProps>(function TablerAbacusIcon(
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
			<path d="M5 3v18" />
			<path d="M19 21v-18" />
			<path d="M5 7h14" />
			<path d="M5 15h14" />
			<path d="M8 13v4" />
			<path d="M11 13v4" />
			<path d="M16 13v4" />
			<path d="M14 5v4" />
			<path d="M11 5v4" />
			<path d="M8 5v4" />
			<path d="M3 21h18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAbacusIcon.displayName = "TablerAbacusIcon";
}
