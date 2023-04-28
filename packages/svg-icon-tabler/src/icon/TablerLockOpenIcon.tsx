import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLockOpenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLockOpenIcon = React.forwardRef<SVGSVGElement, TablerLockOpenIconProps>(function TablerLockOpenIcon(
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
			<path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
			<path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M8 11v-5a4 4 0 0 1 8 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLockOpenIcon.displayName = "TablerLockOpenIcon";
}
