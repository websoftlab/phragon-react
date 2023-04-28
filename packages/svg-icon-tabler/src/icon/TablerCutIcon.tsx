import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCutIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCutIcon = React.forwardRef<SVGSVGElement, TablerCutIconProps>(function TablerCutIcon(props, ref) {
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
			<path d="M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M9.15 14.85l8.85 -10.85" />
			<path d="M6 4l8.85 10.85" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCutIcon.displayName = "TablerCutIcon";
}
