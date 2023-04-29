import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherImageIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherImageIcon = React.forwardRef<SVGSVGElement, FeatherImageIconProps>(function FeatherImageIcon(
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
			<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
			<circle cx="8.5" cy="8.5" r="1.5" />
			<polyline points="21 15 16 10 5 21" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherImageIcon.displayName = "FeatherImageIcon";
}
