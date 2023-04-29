import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherFilterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherFilterIcon = React.forwardRef<SVGSVGElement, FeatherFilterIconProps>(function FeatherFilterIcon(
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
			<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherFilterIcon.displayName = "FeatherFilterIcon";
}
