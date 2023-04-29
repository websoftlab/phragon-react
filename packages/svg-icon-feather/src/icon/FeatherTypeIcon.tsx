import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherTypeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherTypeIcon = React.forwardRef<SVGSVGElement, FeatherTypeIconProps>(function FeatherTypeIcon(
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
			<polyline points="4 7 4 4 20 4 20 7" />
			<line x1="9" y1="20" x2="15" y2="20" />
			<line x1="12" y1="4" x2="12" y2="20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherTypeIcon.displayName = "FeatherTypeIcon";
}
