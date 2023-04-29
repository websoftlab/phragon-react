import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherSquareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherSquareIcon = React.forwardRef<SVGSVGElement, FeatherSquareIconProps>(function FeatherSquareIcon(
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
			<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherSquareIcon.displayName = "FeatherSquareIcon";
}
