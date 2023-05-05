import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBlindsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBlindsIcon = React.forwardRef<SVGSVGElement, TablerBlindsIconProps>(function TablerBlindsIcon(
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
			<path d="M3 3h18" />
			<path d="M20 7H8" />
			<path d="M20 11H8" />
			<path d="M10 19h10" />
			<path d="M8 15h12" />
			<path d="M4 3v14" />
			<path d="M6 19 A2 2 0 0 1 4 21 A2 2 0 0 1 2 19 A2 2 0 0 1 6 19" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBlindsIcon.displayName = "TablerBlindsIcon";
}
