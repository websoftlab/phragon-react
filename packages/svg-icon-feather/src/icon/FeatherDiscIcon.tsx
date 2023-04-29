import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherDiscIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherDiscIcon = React.forwardRef<SVGSVGElement, FeatherDiscIconProps>(function FeatherDiscIcon(
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
			<circle cx="12" cy="12" r="3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherDiscIcon.displayName = "FeatherDiscIcon";
}
