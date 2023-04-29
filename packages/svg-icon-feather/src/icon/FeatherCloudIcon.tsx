import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCloudIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCloudIcon = React.forwardRef<SVGSVGElement, FeatherCloudIconProps>(function FeatherCloudIcon(
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
			<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherCloudIcon.displayName = "FeatherCloudIcon";
}
