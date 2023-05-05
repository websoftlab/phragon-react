import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMagnetIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMagnetIcon = React.forwardRef<SVGSVGElement, TablerMagnetIconProps>(function TablerMagnetIcon(
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
			<path d="m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15" />
			<path d="m5 8 4 4" />
			<path d="m12 15 4 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMagnetIcon.displayName = "TablerMagnetIcon";
}
