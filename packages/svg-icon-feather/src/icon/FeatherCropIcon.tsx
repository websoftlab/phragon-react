import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCropIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCropIcon = React.forwardRef<SVGSVGElement, FeatherCropIconProps>(function FeatherCropIcon(
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
			<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15" />
			<path d="M1 6.13L16 6a2 2 0 0 1 2 2v15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherCropIcon.displayName = "FeatherCropIcon";
}
