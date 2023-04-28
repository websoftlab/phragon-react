import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCubeSendIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCubeSendIcon = React.forwardRef<SVGSVGElement, TablerCubeSendIconProps>(function TablerCubeSendIcon(
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
			<path d="M16 12.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
			<path d="M11 9.5v5.5l5 3" />
			<path d="M16 12.545l5 -3.03" />
			<path d="M7 9h-5" />
			<path d="M7 12h-3" />
			<path d="M7 15h-1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCubeSendIcon.displayName = "TablerCubeSendIcon";
}
