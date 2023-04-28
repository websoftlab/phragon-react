import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRazorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRazorIcon = React.forwardRef<SVGSVGElement, TablerRazorIconProps>(function TablerRazorIcon(
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
			<path d="M7 3h10v4h-10z" />
			<path d="M12 7v4" />
			<path d="M12 11a2 2 0 0 1 2 2v6a2 2 0 1 1 -4 0v-6a2 2 0 0 1 2 -2z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRazorIcon.displayName = "TablerRazorIcon";
}
