import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLayoutDistributeHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLayoutDistributeHorizontalIcon = React.forwardRef<
	SVGSVGElement,
	TablerLayoutDistributeHorizontalIconProps
>(function TablerLayoutDistributeHorizontalIcon(props, ref) {
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
			<path d="M4 4l16 0" />
			<path d="M4 20l16 0" />
			<path d="M6 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLayoutDistributeHorizontalIcon.displayName = "TablerLayoutDistributeHorizontalIcon";
}
