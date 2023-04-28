import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFiltersIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFiltersIcon = React.forwardRef<SVGSVGElement, TablerFiltersIconProps>(function TablerFiltersIcon(
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
			<path d="M12 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
			<path d="M8 11a5 5 0 1 0 3.998 1.997" />
			<path d="M12.002 19.003a5 5 0 1 0 3.998 -8.003" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFiltersIcon.displayName = "TablerFiltersIcon";
}
