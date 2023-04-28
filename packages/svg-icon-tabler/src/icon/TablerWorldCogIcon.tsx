import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldCogIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldCogIcon = React.forwardRef<SVGSVGElement, TablerWorldCogIconProps>(function TablerWorldCogIcon(
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
			<path d="M21 12a9 9 0 1 0 -8.979 9" />
			<path d="M3.6 9h16.8" />
			<path d="M3.6 15h8.9" />
			<path d="M11.5 3a17 17 0 0 0 0 18" />
			<path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376" />
			<path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M19.001 15.5v1.5" />
			<path d="M19.001 21v1.5" />
			<path d="M22.032 17.25l-1.299 .75" />
			<path d="M17.27 20l-1.3 .75" />
			<path d="M15.97 17.25l1.3 .75" />
			<path d="M20.733 20l1.3 .75" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWorldCogIcon.displayName = "TablerWorldCogIcon";
}
