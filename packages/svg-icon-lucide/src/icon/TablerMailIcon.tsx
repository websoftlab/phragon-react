import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMailIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMailIcon = React.forwardRef<SVGSVGElement, TablerMailIconProps>(function TablerMailIcon(props, ref) {
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
			<path d="M4 4 H20 A2 2 0 0 1 22 6 V18 A2 2 0 0 1 20 20 H4 A2 2 0 0 1 2 18 V6 A2 2 0 0 1 4 4 z" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMailIcon.displayName = "TablerMailIcon";
}
