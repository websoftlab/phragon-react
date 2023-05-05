import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBeanOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBeanOffIcon = React.forwardRef<SVGSVGElement, TablerBeanOffIconProps>(function TablerBeanOffIcon(
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
			<path d="M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1" />
			<path d="M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" />
			<path d="M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04" />
			<path d="M2 2 L22 22" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBeanOffIcon.displayName = "TablerBeanOffIcon";
}
