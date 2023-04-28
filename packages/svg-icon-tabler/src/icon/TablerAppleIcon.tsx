import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAppleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAppleIcon = React.forwardRef<SVGSVGElement, TablerAppleIconProps>(function TablerAppleIcon(
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
			<path d="M12 14m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
			<path d="M12 11v-6a2 2 0 0 1 2 -2h2v1a2 2 0 0 1 -2 2h-2" />
			<path d="M10 10.5c1.333 .667 2.667 .667 4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAppleIcon.displayName = "TablerAppleIcon";
}
