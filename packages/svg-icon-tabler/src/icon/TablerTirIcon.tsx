import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTirIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTirIcon = React.forwardRef<SVGSVGElement, TablerTirIconProps>(function TablerTirIcon(props, ref) {
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
			<path d="M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M7 18h8m4 0h2v-6a5 7 0 0 0 -5 -7h-1l1.5 7h4.5" />
			<path d="M12 18v-13h3" />
			<path d="M3 17l0 -5l9 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTirIcon.displayName = "TablerTirIcon";
}
