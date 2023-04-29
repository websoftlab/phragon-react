import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherOctagonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherOctagonIcon = React.forwardRef<SVGSVGElement, FeatherOctagonIconProps>(function FeatherOctagonIcon(
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
			<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherOctagonIcon.displayName = "FeatherOctagonIcon";
}
