import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUxCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUxCircleIcon = React.forwardRef<SVGSVGElement, TablerUxCircleIconProps>(function TablerUxCircleIcon(
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
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M7 10v2a2 2 0 1 0 4 0v-2" />
			<path d="M14 10l3 4" />
			<path d="M14 14l3 -4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUxCircleIcon.displayName = "TablerUxCircleIcon";
}
