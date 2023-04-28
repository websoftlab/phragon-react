import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGraphIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGraphIcon = React.forwardRef<SVGSVGElement, TablerGraphIconProps>(function TablerGraphIcon(
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
			<path d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
			<path d="M7 14l3 -3l2 2l3 -3l2 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGraphIcon.displayName = "TablerGraphIcon";
}
