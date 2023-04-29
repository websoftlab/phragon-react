import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherRepeatIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherRepeatIcon = React.forwardRef<SVGSVGElement, FeatherRepeatIconProps>(function FeatherRepeatIcon(
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
			<polyline points="17 1 21 5 17 9" />
			<path d="M3 11V9a4 4 0 0 1 4-4h14" />
			<polyline points="7 23 3 19 7 15" />
			<path d="M21 13v2a4 4 0 0 1-4 4H3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherRepeatIcon.displayName = "FeatherRepeatIcon";
}
