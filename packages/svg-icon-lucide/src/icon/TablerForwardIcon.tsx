import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerForwardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerForwardIcon = React.forwardRef<SVGSVGElement, TablerForwardIconProps>(function TablerForwardIcon(
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
			<path d="M15 17 L20 12 L15 7" />
			<path d="M4 18v-2a4 4 0 0 1 4-4h12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerForwardIcon.displayName = "TablerForwardIcon";
}
