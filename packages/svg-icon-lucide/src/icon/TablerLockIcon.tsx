import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLockIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLockIcon = React.forwardRef<SVGSVGElement, TablerLockIconProps>(function TablerLockIcon(props, ref) {
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
			<path d="M5 11 H19 A2 2 0 0 1 21 13 V20 A2 2 0 0 1 19 22 H5 A2 2 0 0 1 3 20 V13 A2 2 0 0 1 5 11 z" />
			<path d="M7 11V7a5 5 0 0 1 10 0v4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLockIcon.displayName = "TablerLockIcon";
}
