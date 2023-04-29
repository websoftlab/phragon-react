import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCheckIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCheckIcon = React.forwardRef<SVGSVGElement, FeatherCheckIconProps>(function FeatherCheckIcon(
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
			<polyline points="20 6 9 17 4 12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherCheckIcon.displayName = "FeatherCheckIcon";
}
