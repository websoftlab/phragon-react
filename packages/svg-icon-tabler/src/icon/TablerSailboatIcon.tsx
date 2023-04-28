import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSailboatIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSailboatIcon = React.forwardRef<SVGSVGElement, TablerSailboatIconProps>(function TablerSailboatIcon(
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
			<path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
			<path d="M4 18l-1 -3h18l-1 3" />
			<path d="M11 12h7l-7 -9v9" />
			<path d="M8 7l-2 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSailboatIcon.displayName = "TablerSailboatIcon";
}
