import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherVolumeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherVolumeIcon = React.forwardRef<SVGSVGElement, FeatherVolumeIconProps>(function FeatherVolumeIcon(
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
			<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherVolumeIcon.displayName = "FeatherVolumeIcon";
}
