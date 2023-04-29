import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCameraIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCameraIcon = React.forwardRef<SVGSVGElement, FeatherCameraIconProps>(function FeatherCameraIcon(
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
			<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
			<circle cx="12" cy="13" r="4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherCameraIcon.displayName = "FeatherCameraIcon";
}
