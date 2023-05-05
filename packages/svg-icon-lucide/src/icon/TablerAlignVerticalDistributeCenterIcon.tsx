import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignVerticalDistributeCenterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignVerticalDistributeCenterIcon = React.forwardRef<
	SVGSVGElement,
	TablerAlignVerticalDistributeCenterIconProps
>(function TablerAlignVerticalDistributeCenterIcon(props, ref) {
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
			<path d="M7 14 H17 A2 2 0 0 1 19 16 V18 A2 2 0 0 1 17 20 H7 A2 2 0 0 1 5 18 V16 A2 2 0 0 1 7 14 z" />
			<path d="M9 4 H15 A2 2 0 0 1 17 6 V8 A2 2 0 0 1 15 10 H9 A2 2 0 0 1 7 8 V6 A2 2 0 0 1 9 4 z" />
			<path d="M22 7h-5" />
			<path d="M7 7H1" />
			<path d="M22 17h-3" />
			<path d="M5 17H2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAlignVerticalDistributeCenterIcon.displayName = "TablerAlignVerticalDistributeCenterIcon";
}