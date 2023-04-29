import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherChromeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherChromeIcon = React.forwardRef<SVGSVGElement, FeatherChromeIconProps>(function FeatherChromeIcon(
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
			<circle cx="12" cy="12" r="10" />
			<circle cx="12" cy="12" r="4" />
			<line x1="21.17" y1="8" x2="12" y2="8" />
			<line x1="3.95" y1="6.06" x2="8.54" y2="14" />
			<line x1="10.88" y1="21.94" x2="15.46" y2="14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherChromeIcon.displayName = "FeatherChromeIcon";
}
