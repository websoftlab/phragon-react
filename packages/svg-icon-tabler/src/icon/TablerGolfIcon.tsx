import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGolfIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGolfIcon = React.forwardRef<SVGSVGElement, TablerGolfIconProps>(function TablerGolfIcon(props, ref) {
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
			<path d="M12 18v-15l7 4l-7 4" />
			<path d="M9 17.67c-.62 .36 -1 .82 -1 1.33c0 1.1 1.8 2 4 2s4 -.9 4 -2c0 -.5 -.38 -.97 -1 -1.33" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGolfIcon.displayName = "TablerGolfIcon";
}
