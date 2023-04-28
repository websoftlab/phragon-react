import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStairsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStairsIcon = React.forwardRef<SVGSVGElement, TablerStairsIconProps>(function TablerStairsIcon(
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
			<path d="M4 18h4v-4h4v-4h4v-4h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerStairsIcon.displayName = "TablerStairsIcon";
}
