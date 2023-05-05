import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHeading6IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHeading6Icon = React.forwardRef<SVGSVGElement, TablerHeading6IconProps>(function TablerHeading6Icon(
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
			<path d="M21 16 A2 2 0 0 1 19 18 A2 2 0 0 1 17 16 A2 2 0 0 1 21 16" />
			<path d="M20 10c-2 2-3 3.5-3 6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHeading6Icon.displayName = "TablerHeading6Icon";
}
