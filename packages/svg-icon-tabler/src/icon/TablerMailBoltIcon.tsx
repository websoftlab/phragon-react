import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMailBoltIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMailBoltIcon = React.forwardRef<SVGSVGElement, TablerMailBoltIconProps>(function TablerMailBoltIcon(
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
			<path d="M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5" />
			<path d="M3 7l9 6l9 -6" />
			<path d="M19 16l-2 3h4l-2 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMailBoltIcon.displayName = "TablerMailBoltIcon";
}
