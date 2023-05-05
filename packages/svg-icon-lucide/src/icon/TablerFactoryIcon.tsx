import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFactoryIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFactoryIcon = React.forwardRef<SVGSVGElement, TablerFactoryIconProps>(function TablerFactoryIcon(
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
			<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
			<path d="M17 18h1" />
			<path d="M12 18h1" />
			<path d="M7 18h1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFactoryIcon.displayName = "TablerFactoryIcon";
}
