import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUnlinkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUnlinkIcon = React.forwardRef<SVGSVGElement, TablerUnlinkIconProps>(function TablerUnlinkIcon(
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
			<path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
			<path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
			<path d="M8 2 L8 5" />
			<path d="M2 8 L5 8" />
			<path d="M16 19 L16 22" />
			<path d="M19 16 L22 16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUnlinkIcon.displayName = "TablerUnlinkIcon";
}
