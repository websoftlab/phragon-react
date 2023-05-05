import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAtSignIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAtSignIcon = React.forwardRef<SVGSVGElement, TablerAtSignIconProps>(function TablerAtSignIcon(
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
			<path d="M16 12 A4 4 0 0 1 12 16 A4 4 0 0 1 8 12 A4 4 0 0 1 16 12" />
			<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAtSignIcon.displayName = "TablerAtSignIcon";
}
