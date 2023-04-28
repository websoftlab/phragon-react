import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandAwsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandAwsIcon = React.forwardRef<SVGSVGElement, TablerBrandAwsIconProps>(function TablerBrandAwsIcon(
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
			<path d="M17 18.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94" />
			<path d="M19.5 21c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1" />
			<path d="M3 11v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
			<path d="M3 9h3" />
			<path d="M9 5l1.2 6l1.8 -4l1.8 4l1.2 -6" />
			<path d="M18 10.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBrandAwsIcon.displayName = "TablerBrandAwsIcon";
}
