import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStairsUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStairsUpIcon = React.forwardRef<SVGSVGElement, TablerStairsUpIconProps>(function TablerStairsUpIcon(
	props,
	ref
) {
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
			<path d="M4 20h4v-4h4v-4h4v-4h4" />
			<path d="M4 11l7 -7v4m-4 -4h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerStairsUpIcon.displayName = "TablerStairsUpIcon";
}
