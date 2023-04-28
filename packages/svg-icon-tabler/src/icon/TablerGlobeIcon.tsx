import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGlobeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGlobeIcon = React.forwardRef<SVGSVGElement, TablerGlobeIconProps>(function TablerGlobeIcon(
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
			<path d="M12 10m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
			<path d="M6.75 16a8.015 8.015 0 1 0 9.25 -13" />
			<path d="M12 18l0 4" />
			<path d="M8 22l8 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGlobeIcon.displayName = "TablerGlobeIcon";
}
