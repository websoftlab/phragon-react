import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCampfireIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCampfireIcon = React.forwardRef<SVGSVGElement, TablerCampfireIconProps>(function TablerCampfireIcon(
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
			<path d="M4 21l16 -4" />
			<path d="M20 21l-16 -4" />
			<path d="M12 15a4 4 0 0 0 4 -4c0 -3 -2 -3 -2 -8c-4 2 -6 5 -6 8a4 4 0 0 0 4 4z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCampfireIcon.displayName = "TablerCampfireIcon";
}
