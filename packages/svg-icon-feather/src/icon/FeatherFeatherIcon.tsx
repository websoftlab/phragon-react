import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherFeatherIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherFeatherIcon = React.forwardRef<SVGSVGElement, FeatherFeatherIconProps>(function FeatherFeatherIcon(
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
			<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
			<line x1="16" y1="8" x2="2" y2="22" />
			<line x1="17.5" y1="15" x2="9" y2="15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherFeatherIcon.displayName = "FeatherFeatherIcon";
}
