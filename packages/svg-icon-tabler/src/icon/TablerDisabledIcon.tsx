import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDisabledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDisabledIcon = React.forwardRef<SVGSVGElement, TablerDisabledIconProps>(function TablerDisabledIcon(
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
			<path d="M11 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M11 7l0 8l4 0l4 5" />
			<path d="M11 11l5 0" />
			<path d="M7 11.5a5 5 0 1 0 6 7.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDisabledIcon.displayName = "TablerDisabledIcon";
}
