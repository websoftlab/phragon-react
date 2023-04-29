import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherAirplayIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherAirplayIcon = React.forwardRef<SVGSVGElement, FeatherAirplayIconProps>(function FeatherAirplayIcon(
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
			<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
			<polygon points="12 15 17 21 7 21 12 15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherAirplayIcon.displayName = "FeatherAirplayIcon";
}
