import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandCppIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandCppIcon = React.forwardRef<SVGSVGElement, TablerBrandCppIconProps>(function TablerBrandCppIcon(
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
			<path d="M18 12h4" />
			<path d="M20 10v4" />
			<path d="M11 12h4" />
			<path d="M13 10v4" />
			<path d="M9 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBrandCppIcon.displayName = "TablerBrandCppIcon";
}
