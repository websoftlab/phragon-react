import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerOlympicsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerOlympicsIcon = React.forwardRef<SVGSVGElement, TablerOlympicsIconProps>(function TablerOlympicsIcon(
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
			<path d="M6 9m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M18 9m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M12 9m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M9 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerOlympicsIcon.displayName = "TablerOlympicsIcon";
}
