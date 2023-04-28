import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNeedleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNeedleIcon = React.forwardRef<SVGSVGElement, TablerNeedleIconProps>(function TablerNeedleIcon(
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
			<path d="M3 21c-.667 -.667 3.262 -6.236 11.785 -16.709a3.5 3.5 0 1 1 5.078 4.791c-10.575 8.612 -16.196 12.585 -16.863 11.918z" />
			<path d="M17.5 6.5l-1 1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNeedleIcon.displayName = "TablerNeedleIcon";
}
