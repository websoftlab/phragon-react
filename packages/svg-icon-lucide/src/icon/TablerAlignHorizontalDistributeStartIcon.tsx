import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignHorizontalDistributeStartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignHorizontalDistributeStartIcon = React.forwardRef<
	SVGSVGElement,
	TablerAlignHorizontalDistributeStartIconProps
>(function TablerAlignHorizontalDistributeStartIcon(props, ref) {
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
			<path d="M4 2v20" />
			<path d="M14 2v20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAlignHorizontalDistributeStartIcon.displayName = "TablerAlignHorizontalDistributeStartIcon";
}
