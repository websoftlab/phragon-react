import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWomanIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWomanIcon = React.forwardRef<SVGSVGElement, TablerWomanIconProps>(function TablerWomanIcon(
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
			<path d="M10 16v5" />
			<path d="M14 16v5" />
			<path d="M8 16h8l-2 -7h-4z" />
			<path d="M5 11c1.667 -1.333 3.333 -2 5 -2" />
			<path d="M19 11c-1.667 -1.333 -3.333 -2 -5 -2" />
			<path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWomanIcon.displayName = "TablerWomanIcon";
}
