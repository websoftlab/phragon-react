import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMassageIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMassageIcon = React.forwardRef<SVGSVGElement, TablerMassageIconProps>(function TablerMassageIcon(
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
			<path d="M4 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M4 22l4 -2v-3h12" />
			<path d="M11 20h9" />
			<path d="M8 14l3 -2l1 -4c3 1 3 4 3 6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMassageIcon.displayName = "TablerMassageIcon";
}
