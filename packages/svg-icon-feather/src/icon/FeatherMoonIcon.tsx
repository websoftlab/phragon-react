import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherMoonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherMoonIcon = React.forwardRef<SVGSVGElement, FeatherMoonIconProps>(function FeatherMoonIcon(
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
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherMoonIcon.displayName = "FeatherMoonIcon";
}
