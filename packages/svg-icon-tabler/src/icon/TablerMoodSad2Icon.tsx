import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodSad2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodSad2Icon = React.forwardRef<SVGSVGElement, TablerMoodSad2IconProps>(function TablerMoodSad2Icon(
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
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
			<path d="M10 9.25c-.5 1 -2.5 1 -3 0" />
			<path d="M17 9.25c-.5 1 -2.5 1 -3 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoodSad2Icon.displayName = "TablerMoodSad2Icon";
}
