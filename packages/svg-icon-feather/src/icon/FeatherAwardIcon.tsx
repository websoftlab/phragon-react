import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherAwardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherAwardIcon = React.forwardRef<SVGSVGElement, FeatherAwardIconProps>(function FeatherAwardIcon(
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
			<circle cx="12" cy="8" r="7" />
			<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherAwardIcon.displayName = "FeatherAwardIcon";
}
