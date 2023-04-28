import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsDiagonalMinimize2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsDiagonalMinimize2Icon = React.forwardRef<
	SVGSVGElement,
	TablerArrowsDiagonalMinimize2IconProps
>(function TablerArrowsDiagonalMinimize2Icon(props, ref) {
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
			<path d="M18 10h-4v-4" />
			<path d="M20 4l-6 6" />
			<path d="M6 14h4v4" />
			<path d="M10 14l-6 6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerArrowsDiagonalMinimize2Icon.displayName = "TablerArrowsDiagonalMinimize2Icon";
}
