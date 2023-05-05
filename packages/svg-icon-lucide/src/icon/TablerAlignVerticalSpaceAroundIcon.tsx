import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignVerticalSpaceAroundIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignVerticalSpaceAroundIcon = React.forwardRef<
	SVGSVGElement,
	TablerAlignVerticalSpaceAroundIconProps
>(function TablerAlignVerticalSpaceAroundIcon(props, ref) {
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
			<path d="M9 9 H15 A2 2 0 0 1 17 11 V13 A2 2 0 0 1 15 15 H9 A2 2 0 0 1 7 13 V11 A2 2 0 0 1 9 9 z" />
			<path d="M22 20H2" />
			<path d="M22 4H2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAlignVerticalSpaceAroundIcon.displayName = "TablerAlignVerticalSpaceAroundIcon";
}
