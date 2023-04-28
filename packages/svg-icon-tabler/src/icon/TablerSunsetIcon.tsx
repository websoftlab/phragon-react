import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSunsetIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSunsetIcon = React.forwardRef<SVGSVGElement, TablerSunsetIconProps>(function TablerSunsetIcon(
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
			<path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
			<path d="M3 21l18 0" />
			<path d="M12 3v6l3 -3m-6 0l3 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSunsetIcon.displayName = "TablerSunsetIcon";
}
