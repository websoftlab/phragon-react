import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignVerticalSpaceBetweenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignVerticalSpaceBetweenIcon = React.forwardRef<
	SVGSVGElement,
	TablerAlignVerticalSpaceBetweenIconProps
>(function TablerAlignVerticalSpaceBetweenIcon(props, ref) {
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
			<path d="M7 15 H17 A2 2 0 0 1 19 17 V19 A2 2 0 0 1 17 21 H7 A2 2 0 0 1 5 19 V17 A2 2 0 0 1 7 15 z" />
			<path d="M9 3 H15 A2 2 0 0 1 17 5 V7 A2 2 0 0 1 15 9 H9 A2 2 0 0 1 7 7 V5 A2 2 0 0 1 9 3 z" />
			<path d="M2 21h20" />
			<path d="M2 3h20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAlignVerticalSpaceBetweenIcon.displayName = "TablerAlignVerticalSpaceBetweenIcon";
}
