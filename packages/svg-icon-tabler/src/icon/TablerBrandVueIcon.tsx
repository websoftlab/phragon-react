import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandVueIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandVueIcon = React.forwardRef<SVGSVGElement, TablerBrandVueIconProps>(function TablerBrandVueIcon(
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
			<path d="M16.5 4l-4.5 8l-4.5 -8" />
			<path d="M3 4l9 16l9 -16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBrandVueIcon.displayName = "TablerBrandVueIcon";
}
