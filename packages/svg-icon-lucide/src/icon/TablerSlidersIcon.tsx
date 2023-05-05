import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSlidersIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSlidersIcon = React.forwardRef<SVGSVGElement, TablerSlidersIconProps>(function TablerSlidersIcon(
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
			<path d="M4 21 L4 14" />
			<path d="M4 10 L4 3" />
			<path d="M12 21 L12 12" />
			<path d="M12 8 L12 3" />
			<path d="M20 21 L20 16" />
			<path d="M20 12 L20 3" />
			<path d="M2 14 L6 14" />
			<path d="M10 8 L14 8" />
			<path d="M18 16 L22 16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSlidersIcon.displayName = "TablerSlidersIcon";
}
