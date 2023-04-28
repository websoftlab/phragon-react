import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBellZIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBellZIcon = React.forwardRef<SVGSVGElement, TablerBellZIconProps>(function TablerBellZIcon(
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
			<path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
			<path d="M9 17v1a3 3 0 0 0 6 0v-1" />
			<path d="M10 9h4l-4 4h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBellZIcon.displayName = "TablerBellZIcon";
}
