import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherTvIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherTvIcon = React.forwardRef<SVGSVGElement, FeatherTvIconProps>(function FeatherTvIcon(props, ref) {
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
			<rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
			<polyline points="17 2 12 7 7 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherTvIcon.displayName = "FeatherTvIcon";
}
