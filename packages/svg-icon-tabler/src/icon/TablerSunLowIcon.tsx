import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSunLowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSunLowIcon = React.forwardRef<SVGSVGElement, TablerSunLowIconProps>(function TablerSunLowIcon(
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
			<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
			<path d="M4 12h.01" />
			<path d="M12 4v.01" />
			<path d="M20 12h.01" />
			<path d="M12 20v.01" />
			<path d="M6.31 6.31l-.01 -.01" />
			<path d="M17.71 6.31l-.01 -.01" />
			<path d="M17.7 17.7l.01 .01" />
			<path d="M6.3 17.7l.01 .01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSunLowIcon.displayName = "TablerSunLowIcon";
}
