import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRewindIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRewindIcon = React.forwardRef<SVGSVGElement, TablerRewindIconProps>(function TablerRewindIcon(
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
			<path d="M11 19 L2 12 L11 5 L11 19Z" />
			<path d="M22 19 L13 12 L22 5 L22 19Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRewindIcon.displayName = "TablerRewindIcon";
}
