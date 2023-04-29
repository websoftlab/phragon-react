import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherPlusIcon = React.forwardRef<SVGSVGElement, FeatherPlusIconProps>(function FeatherPlusIcon(
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
			<line x1="12" y1="5" x2="12" y2="19" />
			<line x1="5" y1="12" x2="19" y2="12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherPlusIcon.displayName = "FeatherPlusIcon";
}
