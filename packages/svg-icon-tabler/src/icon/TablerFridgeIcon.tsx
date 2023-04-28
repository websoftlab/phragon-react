import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFridgeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFridgeIcon = React.forwardRef<SVGSVGElement, TablerFridgeIconProps>(function TablerFridgeIcon(
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
			<path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
			<path d="M5 10h14" />
			<path d="M9 13v3" />
			<path d="M9 6v1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFridgeIcon.displayName = "TablerFridgeIcon";
}
