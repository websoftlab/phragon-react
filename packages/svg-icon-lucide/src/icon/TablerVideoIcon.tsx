import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVideoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVideoIcon = React.forwardRef<SVGSVGElement, TablerVideoIconProps>(function TablerVideoIcon(
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
			<path d="m22 8-6 4 6 4V8Z" />
			<path d="M4 6 H14 A2 2 0 0 1 16 8 V16 A2 2 0 0 1 14 18 H4 A2 2 0 0 1 2 16 V8 A2 2 0 0 1 4 6 z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVideoIcon.displayName = "TablerVideoIcon";
}
