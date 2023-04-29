import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCastIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCastIcon = React.forwardRef<SVGSVGElement, FeatherCastIconProps>(function FeatherCastIcon(
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
			<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
			<line x1="2" y1="20" x2="2.01" y2="20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherCastIcon.displayName = "FeatherCastIcon";
}
