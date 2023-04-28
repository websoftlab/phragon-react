import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBusOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBusOffIcon = React.forwardRef<SVGSVGElement, TablerBusOffIconProps>(function TablerBusOffIcon(
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
			<path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M16.18 16.172a2 2 0 0 0 2.652 2.648" />
			<path d="M4 17h-2v-11a1 1 0 0 1 1 -1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0h-8" />
			<path d="M16 5l1.5 7h4.5" />
			<path d="M2 10h8m4 0h3" />
			<path d="M7 7v3" />
			<path d="M12 5v3" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBusOffIcon.displayName = "TablerBusOffIcon";
}
