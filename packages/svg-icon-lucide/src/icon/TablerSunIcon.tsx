import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSunIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSunIcon = React.forwardRef<SVGSVGElement, TablerSunIconProps>(function TablerSunIcon(props, ref) {
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
			<path d="M16 12 A4 4 0 0 1 12 16 A4 4 0 0 1 8 12 A4 4 0 0 1 16 12" />
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
	TablerSunIcon.displayName = "TablerSunIcon";
}
