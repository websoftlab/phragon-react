import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPyramidIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPyramidIcon = React.forwardRef<SVGSVGElement, TablerPyramidIconProps>(function TablerPyramidIcon(
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
			<path d="M3 17l9 4l9 -4l-9 -14z" />
			<path d="M12 3v18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPyramidIcon.displayName = "TablerPyramidIcon";
}
