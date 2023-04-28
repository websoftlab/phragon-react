import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUserCodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUserCodeIcon = React.forwardRef<SVGSVGElement, TablerUserCodeIconProps>(function TablerUserCodeIcon(
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
			<path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
			<path d="M20 21l2 -2l-2 -2" />
			<path d="M17 17l-2 2l2 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUserCodeIcon.displayName = "TablerUserCodeIcon";
}
