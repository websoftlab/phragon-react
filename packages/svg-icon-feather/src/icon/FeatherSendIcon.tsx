import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherSendIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherSendIcon = React.forwardRef<SVGSVGElement, FeatherSendIconProps>(function FeatherSendIcon(
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
			<line x1="22" y1="2" x2="11" y2="13" />
			<polygon points="22 2 15 22 11 13 2 9 22 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherSendIcon.displayName = "FeatherSendIcon";
}
