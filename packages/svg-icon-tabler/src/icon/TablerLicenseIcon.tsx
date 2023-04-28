import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLicenseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLicenseIcon = React.forwardRef<SVGSVGElement, TablerLicenseIconProps>(function TablerLicenseIcon(
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
			<path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
			<path d="M9 7l4 0" />
			<path d="M9 11l4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLicenseIcon.displayName = "TablerLicenseIcon";
}
