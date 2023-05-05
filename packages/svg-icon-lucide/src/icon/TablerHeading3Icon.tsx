import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHeading3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHeading3Icon = React.forwardRef<SVGSVGElement, TablerHeading3IconProps>(function TablerHeading3Icon(
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
			<path d="M4 12h8" />
			<path d="M4 18V6" />
			<path d="M12 18V6" />
			<path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" />
			<path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHeading3Icon.displayName = "TablerHeading3Icon";
}
