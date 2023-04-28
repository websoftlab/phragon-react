import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerScissorsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerScissorsIcon = React.forwardRef<SVGSVGElement, TablerScissorsIconProps>(function TablerScissorsIcon(
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
			<path d="M6 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M8.6 8.6l10.4 10.4" />
			<path d="M8.6 15.4l10.4 -10.4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerScissorsIcon.displayName = "TablerScissorsIcon";
}
