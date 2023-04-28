import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLoginIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLoginIcon = React.forwardRef<SVGSVGElement, TablerLoginIconProps>(function TablerLoginIcon(
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
			<path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
			<path d="M20 12h-13l3 -3m0 6l-3 -3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLoginIcon.displayName = "TablerLoginIcon";
}
