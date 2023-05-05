import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTwitchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTwitchIcon = React.forwardRef<SVGSVGElement, TablerTwitchIconProps>(function TablerTwitchIcon(
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
			<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTwitchIcon.displayName = "TablerTwitchIcon";
}
