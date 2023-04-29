import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherUserXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherUserXIcon = React.forwardRef<SVGSVGElement, FeatherUserXIconProps>(function FeatherUserXIcon(
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
			<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
			<circle cx="8.5" cy="7" r="4" />
			<line x1="18" y1="8" x2="23" y2="13" />
			<line x1="23" y1="8" x2="18" y2="13" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherUserXIcon.displayName = "FeatherUserXIcon";
}
