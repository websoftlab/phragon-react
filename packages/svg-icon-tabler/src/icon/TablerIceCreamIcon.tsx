import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIceCreamIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIceCreamIcon = React.forwardRef<SVGSVGElement, TablerIceCreamIconProps>(function TablerIceCreamIcon(
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
			<path d="M12 21.5v-4.5" />
			<path d="M8 17h8v-10a4 4 0 1 0 -8 0v10z" />
			<path d="M8 10.5l8 -3.5" />
			<path d="M8 14.5l8 -3.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerIceCreamIcon.displayName = "TablerIceCreamIcon";
}
