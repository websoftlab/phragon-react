import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherSearchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherSearchIcon = React.forwardRef<SVGSVGElement, FeatherSearchIconProps>(function FeatherSearchIcon(
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
			<circle cx="11" cy="11" r="8" />
			<line x1="21" y1="21" x2="16.65" y2="16.65" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherSearchIcon.displayName = "FeatherSearchIcon";
}
