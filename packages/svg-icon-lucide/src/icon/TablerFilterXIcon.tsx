import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFilterXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFilterXIcon = React.forwardRef<SVGSVGElement, TablerFilterXIconProps>(function TablerFilterXIcon(
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
			<path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055" />
			<path d="m22 3-5 5" />
			<path d="m17 3 5 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFilterXIcon.displayName = "TablerFilterXIcon";
}
