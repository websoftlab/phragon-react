import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDribbbleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDribbbleIcon = React.forwardRef<SVGSVGElement, TablerDribbbleIconProps>(function TablerDribbbleIcon(
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
			<path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12" />
			<path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
			<path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
			<path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDribbbleIcon.displayName = "TablerDribbbleIcon";
}
