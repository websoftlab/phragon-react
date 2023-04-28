import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBandageIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBandageIcon = React.forwardRef<SVGSVGElement, TablerBandageIconProps>(function TablerBandageIcon(
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
			<path d="M14 12l0 .01" />
			<path d="M10 12l0 .01" />
			<path d="M12 10l0 .01" />
			<path d="M12 14l0 .01" />
			<path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBandageIcon.displayName = "TablerBandageIcon";
}
