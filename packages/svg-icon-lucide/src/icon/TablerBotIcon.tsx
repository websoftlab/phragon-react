import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBotIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBotIcon = React.forwardRef<SVGSVGElement, TablerBotIconProps>(function TablerBotIcon(props, ref) {
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
			<path d="M5 11 H19 A2 2 0 0 1 21 13 V19 A2 2 0 0 1 19 21 H5 A2 2 0 0 1 3 19 V13 A2 2 0 0 1 5 11 z" />
			<path d="M14 5 A2 2 0 0 1 12 7 A2 2 0 0 1 10 5 A2 2 0 0 1 14 5" />
			<path d="M12 7v4" />
			<path d="M8 16 L8 16" />
			<path d="M16 16 L16 16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBotIcon.displayName = "TablerBotIcon";
}
