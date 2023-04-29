import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherFrownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherFrownIcon = React.forwardRef<SVGSVGElement, FeatherFrownIconProps>(function FeatherFrownIcon(
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
			<path d="M16 16s-1.5-2-4-2-4 2-4 2" />
			<line x1="9" y1="9" x2="9.01" y2="9" />
			<line x1="15" y1="9" x2="15.01" y2="9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherFrownIcon.displayName = "FeatherFrownIcon";
}
