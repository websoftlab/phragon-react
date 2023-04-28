import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMacroIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMacroIcon = React.forwardRef<SVGSVGElement, TablerMacroIconProps>(function TablerMacroIcon(
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
			<path d="M6 15a6 6 0 1 0 12 0" />
			<path d="M18 15a6 6 0 0 0 -6 6" />
			<path d="M12 21a6 6 0 0 0 -6 -6" />
			<path d="M12 21v-10" />
			<path d="M12 11a5 5 0 0 1 -5 -5v-3l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -5 5z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMacroIcon.displayName = "TablerMacroIcon";
}
