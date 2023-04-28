import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMailCodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMailCodeIcon = React.forwardRef<SVGSVGElement, TablerMailCodeIconProps>(function TablerMailCodeIcon(
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
			<path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
			<path d="M3 7l9 6l9 -6" />
			<path d="M20 21l2 -2l-2 -2" />
			<path d="M17 17l-2 2l2 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMailCodeIcon.displayName = "TablerMailCodeIcon";
}
