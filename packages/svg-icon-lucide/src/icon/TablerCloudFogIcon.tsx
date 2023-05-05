import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCloudFogIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCloudFogIcon = React.forwardRef<SVGSVGElement, TablerCloudFogIconProps>(function TablerCloudFogIcon(
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
			<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
			<path d="M16 17H7" />
			<path d="M17 21H9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCloudFogIcon.displayName = "TablerCloudFogIcon";
}
