import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlugXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlugXIcon = React.forwardRef<SVGSVGElement, TablerPlugXIconProps>(function TablerPlugXIcon(
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
			<path d="M13.55 17.733a5.806 5.806 0 0 1 -7.356 -4.052a5.81 5.81 0 0 1 1.537 -5.627l2.054 -2.054l7.165 7.165" />
			<path d="M4 20l3.5 -3.5" />
			<path d="M15 4l-3.5 3.5" />
			<path d="M20 9l-3.5 3.5" />
			<path d="M16 16l4 4" />
			<path d="M20 16l-4 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPlugXIcon.displayName = "TablerPlugXIcon";
}
