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
			<path d="M11 5 L6 9 L2 9 L2 15 L6 15 L11 19 L11 5Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVolumeIcon.displayName = "TablerVolumeIcon";
}
