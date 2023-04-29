import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherPlayIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherPlayIcon = React.forwardRef<SVGSVGElement, FeatherPlayIconProps>(function FeatherPlayIcon(
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
			<polygon points="5 3 19 12 5 21 5 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherPlayIcon.displayName = "FeatherPlayIcon";
}
