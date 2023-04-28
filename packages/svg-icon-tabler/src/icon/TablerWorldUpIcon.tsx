import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldUpIcon = React.forwardRef<SVGSVGElement, TablerWorldUpIconProps>(function TablerWorldUpIcon(
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
			<path d="M20.985 12.52a9 9 0 1 0 -8.451 8.463" />
			<path d="M3.6 9h16.8" />
			<path d="M3.6 15h10.9" />
			<path d="M11.5 3a17 17 0 0 0 0 18" />
			<path d="M12.5 3a16.996 16.996 0 0 1 2.391 11.512" />
			<path d="M19 22v-6" />
			<path d="M22 19l-3 -3l-3 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWorldUpIcon.displayName = "TablerWorldUpIcon";
}
