import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherVideoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherVideoIcon = React.forwardRef<SVGSVGElement, FeatherVideoIconProps>(function FeatherVideoIcon(
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
			<polygon points="23 7 16 12 23 17 23 7" />
			<rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherVideoIcon.displayName = "FeatherVideoIcon";
}
