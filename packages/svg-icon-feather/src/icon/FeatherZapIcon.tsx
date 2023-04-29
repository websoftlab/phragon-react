import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherZapIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherZapIcon = React.forwardRef<SVGSVGElement, FeatherZapIconProps>(function FeatherZapIcon(props, ref) {
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
			<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherZapIcon.displayName = "FeatherZapIcon";
}
