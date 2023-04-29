import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherDropletIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherDropletIcon = React.forwardRef<SVGSVGElement, FeatherDropletIconProps>(function FeatherDropletIcon(
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
			<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherDropletIcon.displayName = "FeatherDropletIcon";
}
