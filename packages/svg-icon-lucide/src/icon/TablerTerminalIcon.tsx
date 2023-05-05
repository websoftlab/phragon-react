import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTerminalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTerminalIcon = React.forwardRef<SVGSVGElement, TablerTerminalIconProps>(function TablerTerminalIcon(
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
			<path d="M4 17 L10 11 L4 5" />
			<path d="M12 19 L20 19" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTerminalIcon.displayName = "TablerTerminalIcon";
}
