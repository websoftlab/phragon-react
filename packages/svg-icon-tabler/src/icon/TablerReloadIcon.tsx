import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerReloadIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerReloadIcon = React.forwardRef<SVGSVGElement, TablerReloadIconProps>(function TablerReloadIcon(
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
			<path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" />
			<path d="M20 4v5h-5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerReloadIcon.displayName = "TablerReloadIcon";
}
