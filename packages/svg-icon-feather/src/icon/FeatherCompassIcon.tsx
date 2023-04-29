import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCompassIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCompassIcon = React.forwardRef<SVGSVGElement, FeatherCompassIconProps>(function FeatherCompassIcon(
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
			<circle cx="12" cy="12" r="10" />
			<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherCompassIcon.displayName = "FeatherCompassIcon";
}
