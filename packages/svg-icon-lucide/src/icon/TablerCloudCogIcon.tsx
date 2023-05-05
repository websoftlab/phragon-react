import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCloudCogIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCloudCogIcon = React.forwardRef<SVGSVGElement, TablerCloudCogIconProps>(function TablerCloudCogIcon(
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
			<path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9" />
			<path d="M15 17 A3 3 0 0 1 12 20 A3 3 0 0 1 9 17 A3 3 0 0 1 15 17" />
			<path d="M12 13v1" />
			<path d="M12 20v1" />
			<path d="M16 17h-1" />
			<path d="M9 17H8" />
			<path d="m15 14-.88.88" />
			<path d="M9.88 19.12 9 20" />
			<path d="m15 20-.88-.88" />
			<path d="M9.88 14.88 9 14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCloudCogIcon.displayName = "TablerCloudCogIcon";
}
