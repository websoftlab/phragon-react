import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPhoneXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPhoneXIcon = React.forwardRef<SVGSVGElement, TablerPhoneXIconProps>(function TablerPhoneXIcon(
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
			<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
			<path d="M16 4l4 4m0 -4l-4 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPhoneXIcon.displayName = "TablerPhoneXIcon";
}
