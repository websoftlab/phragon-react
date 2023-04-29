import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherHashIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherHashIcon = React.forwardRef<SVGSVGElement, FeatherHashIconProps>(function FeatherHashIcon(
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
			<line x1="4" y1="9" x2="20" y2="9" />
			<line x1="4" y1="15" x2="20" y2="15" />
			<line x1="10" y1="3" x2="8" y2="21" />
			<line x1="16" y1="3" x2="14" y2="21" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherHashIcon.displayName = "FeatherHashIcon";
}
