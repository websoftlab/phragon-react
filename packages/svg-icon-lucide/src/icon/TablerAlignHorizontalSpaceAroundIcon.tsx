import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignHorizontalSpaceAroundIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignHorizontalSpaceAroundIcon = React.forwardRef<
	SVGSVGElement,
	TablerAlignHorizontalSpaceAroundIconProps
>(function TablerAlignHorizontalSpaceAroundIcon(props, ref) {
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
			<path d="M11 7 H13 A2 2 0 0 1 15 9 V15 A2 2 0 0 1 13 17 H11 A2 2 0 0 1 9 15 V9 A2 2 0 0 1 11 7 z" />
			<path d="M4 22V2" />
			<path d="M20 22V2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAlignHorizontalSpaceAroundIcon.displayName = "TablerAlignHorizontalSpaceAroundIcon";
}
