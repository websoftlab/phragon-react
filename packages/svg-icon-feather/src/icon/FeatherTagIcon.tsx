import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherTagIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherTagIcon = React.forwardRef<SVGSVGElement, FeatherTagIconProps>(function FeatherTagIcon(props, ref) {
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
			<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
			<line x1="7" y1="7" x2="7.01" y2="7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherTagIcon.displayName = "FeatherTagIcon";
}
