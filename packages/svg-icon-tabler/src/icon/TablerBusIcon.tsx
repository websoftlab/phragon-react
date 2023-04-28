import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBusIcon = React.forwardRef<SVGSVGElement, TablerBusIconProps>(function TablerBusIcon(props, ref) {
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
			<path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" />
			<path d="M16 5l1.5 7l4.5 0" />
			<path d="M2 10l15 0" />
			<path d="M7 5l0 5" />
			<path d="M12 5l0 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBusIcon.displayName = "TablerBusIcon";
}
