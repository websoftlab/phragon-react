import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCodeIcon = React.forwardRef<SVGSVGElement, FeatherCodeIconProps>(function FeatherCodeIcon(
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
			<polyline points="16 18 22 12 16 6" />
			<polyline points="8 6 2 12 8 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherCodeIcon.displayName = "FeatherCodeIcon";
}
