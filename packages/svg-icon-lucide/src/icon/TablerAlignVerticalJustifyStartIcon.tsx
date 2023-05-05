import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignVerticalJustifyStartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignVerticalJustifyStartIcon = React.forwardRef<
	SVGSVGElement,
	TablerAlignVerticalJustifyStartIconProps
>(function TablerAlignVerticalJustifyStartIcon(props, ref) {
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
			<path d="M7 16 H17 A2 2 0 0 1 19 18 V20 A2 2 0 0 1 17 22 H7 A2 2 0 0 1 5 20 V18 A2 2 0 0 1 7 16 z" />
			<path d="M9 6 H15 A2 2 0 0 1 17 8 V10 A2 2 0 0 1 15 12 H9 A2 2 0 0 1 7 10 V8 A2 2 0 0 1 9 6 z" />
			<path d="M2 2h20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAlignVerticalJustifyStartIcon.displayName = "TablerAlignVerticalJustifyStartIcon";
}
