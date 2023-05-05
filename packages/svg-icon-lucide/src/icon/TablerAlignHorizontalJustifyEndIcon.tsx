import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignHorizontalJustifyEndIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignHorizontalJustifyEndIcon = React.forwardRef<
	SVGSVGElement,
	TablerAlignHorizontalJustifyEndIconProps
>(function TablerAlignHorizontalJustifyEndIcon(props, ref) {
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
			<path d="M4 5 H6 A2 2 0 0 1 8 7 V17 A2 2 0 0 1 6 19 H4 A2 2 0 0 1 2 17 V7 A2 2 0 0 1 4 5 z" />
			<path d="M14 7 H16 A2 2 0 0 1 18 9 V15 A2 2 0 0 1 16 17 H14 A2 2 0 0 1 12 15 V9 A2 2 0 0 1 14 7 z" />
			<path d="M22 2v20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAlignHorizontalJustifyEndIcon.displayName = "TablerAlignHorizontalJustifyEndIcon";
}
