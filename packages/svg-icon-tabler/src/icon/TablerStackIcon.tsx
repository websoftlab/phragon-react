import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStackIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStackIcon = React.forwardRef<SVGSVGElement, TablerStackIconProps>(function TablerStackIcon(
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
			<path d="M12 6l-8 4l8 4l8 -4l-8 -4" />
			<path d="M4 14l8 4l8 -4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerStackIcon.displayName = "TablerStackIcon";
}
