import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherSunsetIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherSunsetIcon = React.forwardRef<SVGSVGElement, FeatherSunsetIconProps>(function FeatherSunsetIcon(
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
			<path d="M17 18a5 5 0 0 0-10 0" />
			<line x1="12" y1="9" x2="12" y2="2" />
			<line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
			<line x1="1" y1="18" x2="3" y2="18" />
			<line x1="21" y1="18" x2="23" y2="18" />
			<line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
			<line x1="23" y1="22" x2="1" y2="22" />
			<polyline points="16 5 12 9 8 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherSunsetIcon.displayName = "FeatherSunsetIcon";
}
