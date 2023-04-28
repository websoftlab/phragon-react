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
			<path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" />
			<path d="M18 13.3l-6.3 -6.3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerEraserIcon.displayName = "TablerEraserIcon";
}
