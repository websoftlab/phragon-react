import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowDownLeftFromCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowDownLeftFromCircleIcon = React.forwardRef<
	SVGSVGElement,
	TablerArrowDownLeftFromCircleIconProps
>(function TablerArrowDownLeftFromCircleIcon(props, ref) {
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
			<path d="M8 22 L2 22 L2 16" />
			<path d="M2 22 L12 12" />
			<path d="M2,12C2,6.5,6.5,2,12,2s10,4.5,10,10s-4.5,10-10,10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerArrowDownLeftFromCircleIcon.displayName = "TablerArrowDownLeftFromCircleIcon";
}
