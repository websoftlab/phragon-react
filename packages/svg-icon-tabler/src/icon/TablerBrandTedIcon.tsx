import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandTedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandTedIcon = React.forwardRef<SVGSVGElement, TablerBrandTedIconProps>(function TablerBrandTedIcon(
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
			<path d="M2 8h4" />
			<path d="M4 8v8" />
			<path d="M13 8h-4v8h4" />
			<path d="M9 12h2.5" />
			<path d="M16 8v8h2a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3h-2z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBrandTedIcon.displayName = "TablerBrandTedIcon";
}
