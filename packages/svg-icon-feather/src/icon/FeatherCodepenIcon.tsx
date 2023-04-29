import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCodepenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCodepenIcon = React.forwardRef<SVGSVGElement, FeatherCodepenIconProps>(function FeatherCodepenIcon(
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
			<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
			<line x1="12" y1="22" x2="12" y2="15.5" />
			<polyline points="22 8.5 12 15.5 2 8.5" />
			<polyline points="2 15.5 12 8.5 22 15.5" />
			<line x1="12" y1="2" x2="12" y2="8.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherCodepenIcon.displayName = "FeatherCodepenIcon";
}
