import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVolumeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVolumeIcon = React.forwardRef<SVGSVGElement, TablerVolumeIconProps>(function TablerVolumeIcon(
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
			<path d="M15 8a5 5 0 0 1 0 8" />
			<path d="M17.7 5a9 9 0 0 1 0 14" />
			<path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVolumeIcon.displayName = "TablerVolumeIcon";
}
