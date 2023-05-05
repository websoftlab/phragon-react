import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMove3dIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMove3dIcon = React.forwardRef<SVGSVGElement, TablerMove3dIconProps>(function TablerMove3dIcon(
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
			<path d="M5 3v16h16" />
			<path d="m5 19 6-6" />
			<path d="m2 6 3-3 3 3" />
			<path d="m18 16 3 3-3 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMove3dIcon.displayName = "TablerMove3dIcon";
}
