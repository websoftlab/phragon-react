import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMacroOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMacroOffIcon = React.forwardRef<SVGSVGElement, TablerMacroOffIconProps>(function TablerMacroOffIcon(
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
			<path d="M6 15a6 6 0 0 0 11.47 2.467" />
			<path d="M15.53 15.53a6 6 0 0 0 -3.53 5.47" />
			<path d="M12 21a6 6 0 0 0 -6 -6" />
			<path d="M12 21v-10" />
			<path d="M10.866 10.87a5.007 5.007 0 0 1 -3.734 -3.723m-.132 -4.147l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -2.604 4.389" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMacroOffIcon.displayName = "TablerMacroOffIcon";
}
