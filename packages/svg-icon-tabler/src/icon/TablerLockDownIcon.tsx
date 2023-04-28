import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLockDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLockDownIcon = React.forwardRef<SVGSVGElement, TablerLockDownIconProps>(function TablerLockDownIcon(
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
			<path d="M12.5 21h-5.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 1.74 1.015" />
			<path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
			<path d="M8 11v-4a4 4 0 1 1 8 0v4" />
			<path d="M19 16v6" />
			<path d="M22 19l-3 3l-3 -3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLockDownIcon.displayName = "TablerLockDownIcon";
}
