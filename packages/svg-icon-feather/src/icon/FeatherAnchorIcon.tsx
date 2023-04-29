import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherAnchorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherAnchorIcon = React.forwardRef<SVGSVGElement, FeatherAnchorIconProps>(function FeatherAnchorIcon(
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
			<circle cx="12" cy="5" r="3" />
			<line x1="12" y1="22" x2="12" y2="8" />
			<path d="M5 12H2a10 10 0 0 0 20 0h-3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherAnchorIcon.displayName = "FeatherAnchorIcon";
}
