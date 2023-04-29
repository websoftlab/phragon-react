import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherBoldIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherBoldIcon = React.forwardRef<SVGSVGElement, FeatherBoldIconProps>(function FeatherBoldIcon(
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
			<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
			<path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherBoldIcon.displayName = "FeatherBoldIcon";
}
