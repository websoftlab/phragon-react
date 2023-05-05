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
			<path d="M22 6 L2 6" />
			<path d="M22 18 L2 18" />
			<path d="M6 2 L6 22" />
			<path d="M18 2 L18 22" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFrameIcon.displayName = "TablerFrameIcon";
}
