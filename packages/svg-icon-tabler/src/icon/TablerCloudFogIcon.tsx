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
			<path d="M7 16a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
			<path d="M5 20l14 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCloudFogIcon.displayName = "TablerCloudFogIcon";
}
