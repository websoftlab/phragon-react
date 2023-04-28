import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodBoyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodBoyIcon = React.forwardRef<SVGSVGElement, TablerMoodBoyIconProps>(function TablerMoodBoyIcon(
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
			<path d="M17 4.5a9 9 0 0 1 3.864 5.89a2.5 2.5 0 0 1 -.29 4.36a9 9 0 0 1 -17.137 0a2.5 2.5 0 0 1 -.29 -4.36a9 9 0 0 1 3.746 -5.81" />
			<path d="M9.5 16a3.5 3.5 0 0 0 5 0" />
			<path d="M8.5 2c1.5 1 2.5 3.5 2.5 5" />
			<path d="M12.5 2c1.5 2 2 3.5 2 5" />
			<path d="M9 12l.01 0" />
			<path d="M15 12l.01 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoodBoyIcon.displayName = "TablerMoodBoyIcon";
}
