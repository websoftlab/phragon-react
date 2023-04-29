import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherMapPinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherMapPinIcon = React.forwardRef<SVGSVGElement, FeatherMapPinIconProps>(function FeatherMapPinIcon(
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
			<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
			<circle cx="12" cy="10" r="3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherMapPinIcon.displayName = "FeatherMapPinIcon";
}
