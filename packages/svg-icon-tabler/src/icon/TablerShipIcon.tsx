import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShipIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShipIcon = React.forwardRef<SVGSVGElement, TablerShipIconProps>(function TablerShipIcon(props, ref) {
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
			<path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
			<path d="M4 18l-1 -5h18l-2 4" />
			<path d="M5 13v-6h8l4 6" />
			<path d="M7 7v-4h-1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShipIcon.displayName = "TablerShipIcon";
}
