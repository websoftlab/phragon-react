import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAdIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAdIcon = React.forwardRef<SVGSVGElement, TablerAdIconProps>(function TablerAdIcon(props, ref) {
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
			<path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
			<path d="M7 15v-4a2 2 0 0 1 4 0v4" />
			<path d="M7 13l4 0" />
			<path d="M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAdIcon.displayName = "TablerAdIcon";
}
