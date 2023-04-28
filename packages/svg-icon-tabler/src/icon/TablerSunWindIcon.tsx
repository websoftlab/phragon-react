import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSunWindIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSunWindIcon = React.forwardRef<SVGSVGElement, TablerSunWindIconProps>(function TablerSunWindIcon(
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
			<path d="M14.468 10a4 4 0 1 0 -5.466 5.46" />
			<path d="M2 12h1" />
			<path d="M11 3v1" />
			<path d="M11 20v1" />
			<path d="M4.6 5.6l.7 .7" />
			<path d="M17.4 5.6l-.7 .7" />
			<path d="M5.3 17.7l-.7 .7" />
			<path d="M15 13h5a2 2 0 1 0 0 -4" />
			<path d="M12 16h5.714l.253 0a2 2 0 0 1 2.033 2a2 2 0 0 1 -2 2h-.286" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSunWindIcon.displayName = "TablerSunWindIcon";
}
