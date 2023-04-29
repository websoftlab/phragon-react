import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherZapOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherZapOffIcon = React.forwardRef<SVGSVGElement, FeatherZapOffIconProps>(function FeatherZapOffIcon(
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
			<polyline points="12.41 6.75 13 2 10.57 4.92" />
			<polyline points="18.57 12.91 21 10 15.66 10" />
			<polyline points="8 8 3 14 12 14 11 22 16 16" />
			<line x1="1" y1="1" x2="23" y2="23" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherZapOffIcon.displayName = "FeatherZapOffIcon";
}
