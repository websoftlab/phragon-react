import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBeanIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBeanIcon = React.forwardRef<SVGSVGElement, TablerBeanIconProps>(function TablerBeanIcon(props, ref) {
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
			<path d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z" />
			<path d="M5.341 10.62a4 4 0 1 0 5.279-5.28" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBeanIcon.displayName = "TablerBeanIcon";
}
