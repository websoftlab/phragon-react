import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherArrowUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherArrowUpIcon = React.forwardRef<SVGSVGElement, FeatherArrowUpIconProps>(function FeatherArrowUpIcon(
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
			<line x1="12" y1="19" x2="12" y2="5" />
			<polyline points="5 12 12 5 19 12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherArrowUpIcon.displayName = "FeatherArrowUpIcon";
}
