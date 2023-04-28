import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRoadSignIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRoadSignIcon = React.forwardRef<SVGSVGElement, TablerRoadSignIconProps>(function TablerRoadSignIcon(
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
			<path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" />
			<path d="M9 14v-2c0 -.59 .414 -1 1 -1h5" />
			<path d="M13 9l2 2l-2 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRoadSignIcon.displayName = "TablerRoadSignIcon";
}
