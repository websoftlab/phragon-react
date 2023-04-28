import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStack3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStack3Icon = React.forwardRef<SVGSVGElement, TablerStack3IconProps>(function TablerStack3Icon(
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
			<path d="M12 2l-8 4l8 4l8 -4l-8 -4" />
			<path d="M4 10l8 4l8 -4" />
			<path d="M4 18l8 4l8 -4" />
			<path d="M4 14l8 4l8 -4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerStack3Icon.displayName = "TablerStack3Icon";
}
