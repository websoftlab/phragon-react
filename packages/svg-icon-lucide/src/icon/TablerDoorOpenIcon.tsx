import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDoorOpenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDoorOpenIcon = React.forwardRef<SVGSVGElement, TablerDoorOpenIconProps>(function TablerDoorOpenIcon(
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
			<path d="M13 4h3a2 2 0 0 1 2 2v14" />
			<path d="M2 20h3" />
			<path d="M13 20h9" />
			<path d="M10 12v.01" />
			<path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDoorOpenIcon.displayName = "TablerDoorOpenIcon";
}
