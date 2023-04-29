import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherXIcon = React.forwardRef<SVGSVGElement, FeatherXIconProps>(function FeatherXIcon(props, ref) {
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
			<line x1="18" y1="6" x2="6" y2="18" />
			<line x1="6" y1="6" x2="18" y2="18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherXIcon.displayName = "FeatherXIcon";
}
