import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTooltipIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTooltipIcon = React.forwardRef<SVGSVGElement, TablerTooltipIconProps>(function TablerTooltipIcon(
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
			<path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M12 13l-1.707 -1.707a1 1 0 0 0 -.707 -.293h-2.586a2 2 0 0 1 -2 -2v-3a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2.586a1 1 0 0 0 -.707 .293l-1.707 1.707z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTooltipIcon.displayName = "TablerTooltipIcon";
}
