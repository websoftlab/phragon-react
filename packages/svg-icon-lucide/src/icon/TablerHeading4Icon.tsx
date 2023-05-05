import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHeading4IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHeading4Icon = React.forwardRef<SVGSVGElement, TablerHeading4IconProps>(function TablerHeading4Icon(
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
			<path d="M17 10v4h4" />
			<path d="M21 10v8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHeading4Icon.displayName = "TablerHeading4Icon";
}
