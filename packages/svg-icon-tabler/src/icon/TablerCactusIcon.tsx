import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCactusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCactusIcon = React.forwardRef<SVGSVGElement, TablerCactusIconProps>(function TablerCactusIcon(
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
			<path d="M6 9v1a3 3 0 0 0 3 3h1" />
			<path d="M18 8v5a3 3 0 0 1 -3 3h-1" />
			<path d="M10 21v-16a2 2 0 1 1 4 0v16" />
			<path d="M7 21h10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCactusIcon.displayName = "TablerCactusIcon";
}
