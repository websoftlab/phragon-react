import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCsvIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCsvIcon = React.forwardRef<SVGSVGElement, TablerCsvIconProps>(function TablerCsvIcon(props, ref) {
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
			<path d="M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1" />
			<path d="M17 8l2 8l2 -8" />
			<path d="M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCsvIcon.displayName = "TablerCsvIcon";
}
