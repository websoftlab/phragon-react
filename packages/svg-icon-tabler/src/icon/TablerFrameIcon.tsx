import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFrameIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFrameIcon = React.forwardRef<SVGSVGElement, TablerFrameIconProps>(function TablerFrameIcon(
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
			<path d="M4 7l16 0" />
			<path d="M4 17l16 0" />
			<path d="M7 4l0 16" />
			<path d="M17 4l0 16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFrameIcon.displayName = "TablerFrameIcon";
}
