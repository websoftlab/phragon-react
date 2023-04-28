import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMailAiIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMailAiIcon = React.forwardRef<SVGSVGElement, TablerMailAiIconProps>(function TablerMailAiIcon(
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
			<path d="M10 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" />
			<path d="M3 7l8 5.345m4 -1.345l6 -4" />
			<path d="M14 21v-4a2 2 0 1 1 4 0v4" />
			<path d="M14 19h4" />
			<path d="M21 15v6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMailAiIcon.displayName = "TablerMailAiIcon";
}
