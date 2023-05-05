import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignHorizontalSpaceBetweenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignHorizontalSpaceBetweenIcon = React.forwardRef<
	SVGSVGElement,
	TablerAlignHorizontalSpaceBetweenIconProps
>(function TablerAlignHorizontalSpaceBetweenIcon(props, ref) {
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
			<path d="M5 5 H7 A2 2 0 0 1 9 7 V17 A2 2 0 0 1 7 19 H5 A2 2 0 0 1 3 17 V7 A2 2 0 0 1 5 5 z" />
			<path d="M17 7 H19 A2 2 0 0 1 21 9 V15 A2 2 0 0 1 19 17 H17 A2 2 0 0 1 15 15 V9 A2 2 0 0 1 17 7 z" />
			<path d="M3 2v20" />
			<path d="M21 2v20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAlignHorizontalSpaceBetweenIcon.displayName = "TablerAlignHorizontalSpaceBetweenIcon";
}
