import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignHorizontalJustifyCenterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignHorizontalJustifyCenterIcon = React.forwardRef<
	SVGSVGElement,
	TablerAlignHorizontalJustifyCenterIconProps
>(function TablerAlignHorizontalJustifyCenterIcon(props, ref) {
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
			<path d="M18 7 H20 A2 2 0 0 1 22 9 V15 A2 2 0 0 1 20 17 H18 A2 2 0 0 1 16 15 V9 A2 2 0 0 1 18 7 z" />
			<path d="M12 2v20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAlignHorizontalJustifyCenterIcon.displayName = "TablerAlignHorizontalJustifyCenterIcon";
}
