import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherPauseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherPauseIcon = React.forwardRef<SVGSVGElement, FeatherPauseIconProps>(function FeatherPauseIcon(
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
			<rect x="6" y="4" width="4" height="16" />
			<rect x="14" y="4" width="4" height="16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherPauseIcon.displayName = "FeatherPauseIcon";
}
