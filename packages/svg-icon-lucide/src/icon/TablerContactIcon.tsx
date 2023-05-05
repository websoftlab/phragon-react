import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerContactIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerContactIcon = React.forwardRef<SVGSVGElement, TablerContactIconProps>(function TablerContactIcon(
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
			<path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
			<path d="M5 4 H19 A2 2 0 0 1 21 6 V20 A2 2 0 0 1 19 22 H5 A2 2 0 0 1 3 20 V6 A2 2 0 0 1 5 4 z" />
			<path d="M14 10 A2 2 0 0 1 12 12 A2 2 0 0 1 10 10 A2 2 0 0 1 14 10" />
			<path d="M8 2 L8 4" />
			<path d="M16 2 L16 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerContactIcon.displayName = "TablerContactIcon";
}
