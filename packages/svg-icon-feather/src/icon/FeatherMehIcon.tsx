import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherMehIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherMehIcon = React.forwardRef<SVGSVGElement, FeatherMehIconProps>(function FeatherMehIcon(props, ref) {
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
			<line x1="8" y1="15" x2="16" y2="15" />
			<line x1="9" y1="9" x2="9.01" y2="9" />
			<line x1="15" y1="9" x2="15.01" y2="9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherMehIcon.displayName = "FeatherMehIcon";
}
