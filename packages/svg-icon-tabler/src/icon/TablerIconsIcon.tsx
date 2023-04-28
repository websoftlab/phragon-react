import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIconsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIconsIcon = React.forwardRef<SVGSVGElement, TablerIconsIconProps>(function TablerIconsIcon(
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
			<path d="M6.5 6.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
			<path d="M2.5 21h8l-4 -7z" />
			<path d="M14 3l7 7" />
			<path d="M14 10l7 -7" />
			<path d="M14 14h7v7h-7z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerIconsIcon.displayName = "TablerIconsIcon";
}
