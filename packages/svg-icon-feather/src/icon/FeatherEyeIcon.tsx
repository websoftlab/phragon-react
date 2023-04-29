import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherEyeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherEyeIcon = React.forwardRef<SVGSVGElement, FeatherEyeIconProps>(function FeatherEyeIcon(props, ref) {
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
			<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
			<circle cx="12" cy="12" r="3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherEyeIcon.displayName = "FeatherEyeIcon";
}
