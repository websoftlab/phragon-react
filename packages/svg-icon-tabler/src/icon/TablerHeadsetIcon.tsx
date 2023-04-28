import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHeadsetIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHeadsetIcon = React.forwardRef<SVGSVGElement, TablerHeadsetIconProps>(function TablerHeadsetIcon(
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
			<path d="M4 14v-3a8 8 0 1 1 16 0v3" />
			<path d="M18 19c0 1.657 -2.686 3 -6 3" />
			<path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
			<path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHeadsetIcon.displayName = "TablerHeadsetIcon";
}
