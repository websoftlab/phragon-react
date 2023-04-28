import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCometIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCometIcon = React.forwardRef<SVGSVGElement, TablerCometIconProps>(function TablerCometIcon(
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
			<path d="M15.5 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
			<path d="M4 4l7 7" />
			<path d="M9 4l3.5 3.5" />
			<path d="M4 9l3.5 3.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCometIcon.displayName = "TablerCometIcon";
}
