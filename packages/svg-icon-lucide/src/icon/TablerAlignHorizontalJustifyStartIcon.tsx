import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignHorizontalJustifyStartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignHorizontalJustifyStartIcon = React.forwardRef<
	SVGSVGElement,
	TablerAlignHorizontalJustifyStartIconProps
>(function TablerAlignHorizontalJustifyStartIcon(props, ref) {
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
			<path d="M8 5 H10 A2 2 0 0 1 12 7 V17 A2 2 0 0 1 10 19 H8 A2 2 0 0 1 6 17 V7 A2 2 0 0 1 8 5 z" />
			<path d="M18 7 H20 A2 2 0 0 1 22 9 V15 A2 2 0 0 1 20 17 H18 A2 2 0 0 1 16 15 V9 A2 2 0 0 1 18 7 z" />
			<path d="M2 2v20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAlignHorizontalJustifyStartIcon.displayName = "TablerAlignHorizontalJustifyStartIcon";
}
