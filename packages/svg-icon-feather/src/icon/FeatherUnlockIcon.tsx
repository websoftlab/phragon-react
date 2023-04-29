import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherUnlockIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherUnlockIcon = React.forwardRef<SVGSVGElement, FeatherUnlockIconProps>(function FeatherUnlockIcon(
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
			<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
			<path d="M7 11V7a5 5 0 0 1 9.9-1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherUnlockIcon.displayName = "FeatherUnlockIcon";
}
