import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherAtSignIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherAtSignIcon = React.forwardRef<SVGSVGElement, FeatherAtSignIconProps>(function FeatherAtSignIcon(
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
			<circle cx="12" cy="12" r="4" />
			<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherAtSignIcon.displayName = "FeatherAtSignIcon";
}
