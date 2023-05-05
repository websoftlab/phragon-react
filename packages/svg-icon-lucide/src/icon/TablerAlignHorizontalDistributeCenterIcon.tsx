import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignHorizontalDistributeCenterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignHorizontalDistributeCenterIcon = React.forwardRef<
	SVGSVGElement,
	TablerAlignHorizontalDistributeCenterIconProps
>(function TablerAlignHorizontalDistributeCenterIcon(props, ref) {
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
			<path d="M6 5 H8 A2 2 0 0 1 10 7 V17 A2 2 0 0 1 8 19 H6 A2 2 0 0 1 4 17 V7 A2 2 0 0 1 6 5 z" />
			<path d="M16 7 H18 A2 2 0 0 1 20 9 V15 A2 2 0 0 1 18 17 H16 A2 2 0 0 1 14 15 V9 A2 2 0 0 1 16 7 z" />
			<path d="M17 22v-5" />
			<path d="M17 7V2" />
			<path d="M7 22v-3" />
			<path d="M7 5V2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAlignHorizontalDistributeCenterIcon.displayName = "TablerAlignHorizontalDistributeCenterIcon";
}
