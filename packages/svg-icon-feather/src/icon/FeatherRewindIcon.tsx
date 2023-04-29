import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherRewindIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherRewindIcon = React.forwardRef<SVGSVGElement, FeatherRewindIconProps>(function FeatherRewindIcon(
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
			<polygon points="11 19 2 12 11 5 11 19" />
			<polygon points="22 19 13 12 22 5 22 19" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherRewindIcon.displayName = "FeatherRewindIcon";
}
