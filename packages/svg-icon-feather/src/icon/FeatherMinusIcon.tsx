import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherMinusIcon = React.forwardRef<SVGSVGElement, FeatherMinusIconProps>(function FeatherMinusIcon(
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
			<line x1="5" y1="12" x2="19" y2="12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherMinusIcon.displayName = "FeatherMinusIcon";
}
