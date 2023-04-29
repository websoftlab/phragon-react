import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherDivideIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherDivideIcon = React.forwardRef<SVGSVGElement, FeatherDivideIconProps>(function FeatherDivideIcon(
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
			<circle cx="12" cy="6" r="2" />
			<line x1="5" y1="12" x2="19" y2="12" />
			<circle cx="12" cy="18" r="2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherDivideIcon.displayName = "FeatherDivideIcon";
}
