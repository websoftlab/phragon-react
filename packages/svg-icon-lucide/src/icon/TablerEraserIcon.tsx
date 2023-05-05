import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEraserIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEraserIcon = React.forwardRef<SVGSVGElement, TablerEraserIconProps>(function TablerEraserIcon(
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
			<path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
			<path d="M22 21H7" />
			<path d="m5 11 9 9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerEraserIcon.displayName = "TablerEraserIcon";
}
