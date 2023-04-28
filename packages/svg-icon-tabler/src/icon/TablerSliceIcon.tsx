import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSliceIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSliceIcon = React.forwardRef<SVGSVGElement, TablerSliceIconProps>(function TablerSliceIcon(
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
			<path d="M3 19l15 -15l3 3l-6 6l2 2a14 14 0 0 1 -14 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSliceIcon.displayName = "TablerSliceIcon";
}
