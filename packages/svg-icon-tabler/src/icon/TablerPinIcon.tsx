import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPinIcon = React.forwardRef<SVGSVGElement, TablerPinIconProps>(function TablerPinIcon(props, ref) {
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
			<path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
			<path d="M9 15l-4.5 4.5" />
			<path d="M14.5 4l5.5 5.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPinIcon.displayName = "TablerPinIcon";
}
