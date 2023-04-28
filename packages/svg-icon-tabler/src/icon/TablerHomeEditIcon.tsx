import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeEditIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeEditIcon = React.forwardRef<SVGSVGElement, TablerHomeEditIconProps>(function TablerHomeEditIcon(
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
			<path d="M9 21v-6a2 2 0 0 1 2 -2h2c.645 0 1.218 .305 1.584 .78" />
			<path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4" />
			<path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHomeEditIcon.displayName = "TablerHomeEditIcon";
}
