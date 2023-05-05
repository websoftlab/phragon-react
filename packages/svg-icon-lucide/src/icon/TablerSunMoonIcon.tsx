import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSunMoonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSunMoonIcon = React.forwardRef<SVGSVGElement, TablerSunMoonIconProps>(function TablerSunMoonIcon(
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
			<path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
			<path d="M12 8a2.828 2.828 0 1 0 4 4" />
			<path d="M12 2v2" />
			<path d="M12 20v2" />
			<path d="m4.93 4.93 1.41 1.41" />
			<path d="m17.66 17.66 1.41 1.41" />
			<path d="M2 12h2" />
			<path d="M20 12h2" />
			<path d="m6.34 17.66-1.41 1.41" />
			<path d="m19.07 4.93-1.41 1.41" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSunMoonIcon.displayName = "TablerSunMoonIcon";
}
