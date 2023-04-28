import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBackpackIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBackpackIcon = React.forwardRef<SVGSVGElement, TablerBackpackIconProps>(function TablerBackpackIcon(
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
			<path d="M5 18v-6a6 6 0 0 1 6 -6h2a6 6 0 0 1 6 6v6a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3z" />
			<path d="M10 6v-1a2 2 0 1 1 4 0v1" />
			<path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
			<path d="M11 10h2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBackpackIcon.displayName = "TablerBackpackIcon";
}
