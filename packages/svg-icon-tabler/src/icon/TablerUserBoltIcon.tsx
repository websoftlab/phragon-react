import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUserBoltIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUserBoltIcon = React.forwardRef<SVGSVGElement, TablerUserBoltIconProps>(function TablerUserBoltIcon(
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
			<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
			<path d="M6 21v-2a4 4 0 0 1 4 -4h4c.267 0 .529 .026 .781 .076" />
			<path d="M19 16l-2 3h4l-2 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUserBoltIcon.displayName = "TablerUserBoltIcon";
}
