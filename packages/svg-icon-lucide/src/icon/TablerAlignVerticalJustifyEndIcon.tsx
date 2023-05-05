import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignVerticalJustifyEndIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignVerticalJustifyEndIcon = React.forwardRef<
	SVGSVGElement,
	TablerAlignVerticalJustifyEndIconProps
>(function TablerAlignVerticalJustifyEndIcon(props, ref) {
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
			<path d="M7 12 H17 A2 2 0 0 1 19 14 V16 A2 2 0 0 1 17 18 H7 A2 2 0 0 1 5 16 V14 A2 2 0 0 1 7 12 z" />
			<path d="M9 2 H15 A2 2 0 0 1 17 4 V6 A2 2 0 0 1 15 8 H9 A2 2 0 0 1 7 6 V4 A2 2 0 0 1 9 2 z" />
			<path d="M2 22h20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAlignVerticalJustifyEndIcon.displayName = "TablerAlignVerticalJustifyEndIcon";
}
