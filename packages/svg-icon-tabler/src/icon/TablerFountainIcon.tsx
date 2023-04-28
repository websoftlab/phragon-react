import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFountainIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFountainIcon = React.forwardRef<SVGSVGElement, TablerFountainIconProps>(function TablerFountainIcon(
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
			<path d="M9 16v-5a2 2 0 1 0 -4 0" />
			<path d="M15 16v-5a2 2 0 1 1 4 0" />
			<path d="M12 16v-10a3 3 0 0 1 6 0" />
			<path d="M6 6a3 3 0 0 1 6 0" />
			<path d="M3 16h18v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFountainIcon.displayName = "TablerFountainIcon";
}
