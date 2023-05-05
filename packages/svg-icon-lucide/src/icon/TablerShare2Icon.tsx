import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShare2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShare2Icon = React.forwardRef<SVGSVGElement, TablerShare2IconProps>(function TablerShare2Icon(
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
			<path d="M21 5 A3 3 0 0 1 18 8 A3 3 0 0 1 15 5 A3 3 0 0 1 21 5" />
			<path d="M9 12 A3 3 0 0 1 6 15 A3 3 0 0 1 3 12 A3 3 0 0 1 9 12" />
			<path d="M21 19 A3 3 0 0 1 18 22 A3 3 0 0 1 15 19 A3 3 0 0 1 21 19" />
			<path d="M8.59 13.51 L15.42 17.49" />
			<path d="M15.41 6.51 L8.59 10.49" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShare2Icon.displayName = "TablerShare2Icon";
}
