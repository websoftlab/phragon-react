import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerKeringIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerKeringIcon = React.forwardRef<SVGSVGElement, TablerKeringIconProps>(function TablerKeringIcon(
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
			<path d="M16 15v-3.5a2.5 2.5 0 1 1 5 0v3.5m0 -2h-5" />
			<path d="M3 9l3 6l3 -6" />
			<path d="M9 20l6 -16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerKeringIcon.displayName = "TablerKeringIcon";
}
