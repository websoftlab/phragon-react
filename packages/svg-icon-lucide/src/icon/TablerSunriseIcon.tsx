import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSunriseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSunriseIcon = React.forwardRef<SVGSVGElement, TablerSunriseIconProps>(function TablerSunriseIcon(
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
			<path d="M12 2v8" />
			<path d="m4.93 10.93 1.41 1.41" />
			<path d="M2 18h2" />
			<path d="M20 18h2" />
			<path d="m19.07 10.93-1.41 1.41" />
			<path d="M22 22H2" />
			<path d="m8 6 4-4 4 4" />
			<path d="M16 18a4 4 0 0 0-8 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSunriseIcon.displayName = "TablerSunriseIcon";
}
