import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingIcon = React.forwardRef<SVGSVGElement, TablerBuildingIconProps>(function TablerBuildingIcon(
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
			<path d="M6 2 H18 A2 2 0 0 1 20 4 V20 A2 2 0 0 1 18 22 H6 A2 2 0 0 1 4 20 V4 A2 2 0 0 1 6 2 z" />
			<path d="M9 22v-4h6v4" />
			<path d="M8 6h.01" />
			<path d="M16 6h.01" />
			<path d="M12 6h.01" />
			<path d="M12 10h.01" />
			<path d="M12 14h.01" />
			<path d="M16 10h.01" />
			<path d="M16 14h.01" />
			<path d="M8 10h.01" />
			<path d="M8 14h.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBuildingIcon.displayName = "TablerBuildingIcon";
}
