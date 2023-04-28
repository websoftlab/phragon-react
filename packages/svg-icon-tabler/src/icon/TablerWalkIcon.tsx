import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWalkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWalkIcon = React.forwardRef<SVGSVGElement, TablerWalkIconProps>(function TablerWalkIcon(props, ref) {
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
			<path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M7 21l3 -4" />
			<path d="M16 21l-2 -4l-3 -3l1 -6" />
			<path d="M6 12l2 -3l4 -1l3 3l3 1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWalkIcon.displayName = "TablerWalkIcon";
}
