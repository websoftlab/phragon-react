import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherXCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherXCircleIcon = React.forwardRef<SVGSVGElement, FeatherXCircleIconProps>(function FeatherXCircleIcon(
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
			<line x1="15" y1="9" x2="9" y2="15" />
			<line x1="9" y1="9" x2="15" y2="15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherXCircleIcon.displayName = "FeatherXCircleIcon";
}
