import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDiscGolfIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDiscGolfIcon = React.forwardRef<SVGSVGElement, TablerDiscGolfIconProps>(function TablerDiscGolfIcon(
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
			<path d="M5 5h14" />
			<path d="M6 5c.32 6.744 2.74 9.246 6 10" />
			<path d="M18 5c-.32 6.744 -2.74 9.246 -6 10" />
			<path d="M10 5c0 4.915 .552 7.082 2 10" />
			<path d="M14 5c0 4.915 -.552 7.082 -2 10" />
			<path d="M12 15v6" />
			<path d="M12 3v2" />
			<path d="M7 16c.64 .64 1.509 1 2.414 1h5.172c.905 0 1.774 -.36 2.414 -1" />
			<path d="M11 21h2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDiscGolfIcon.displayName = "TablerDiscGolfIcon";
}
