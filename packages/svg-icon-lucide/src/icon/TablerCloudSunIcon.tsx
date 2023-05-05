import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCloudSunIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCloudSunIcon = React.forwardRef<SVGSVGElement, TablerCloudSunIconProps>(function TablerCloudSunIcon(
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
			<path d="M12 2v2" />
			<path d="m4.93 4.93 1.41 1.41" />
			<path d="M20 12h2" />
			<path d="m19.07 4.93-1.41 1.41" />
			<path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
			<path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCloudSunIcon.displayName = "TablerCloudSunIcon";
}
