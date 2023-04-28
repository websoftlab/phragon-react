import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGlassIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGlassIcon = React.forwardRef<SVGSVGElement, TablerGlassIconProps>(function TablerGlassIcon(
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
			<path d="M8 21l8 0" />
			<path d="M12 15l0 6" />
			<path d="M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGlassIcon.displayName = "TablerGlassIcon";
}
