import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHelpOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHelpOffIcon = React.forwardRef<SVGSVGElement, TablerHelpOffIconProps>(function TablerHelpOffIcon(
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
			<path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
			<path d="M12 17v.01" />
			<path d="M12 13.5a1.5 1.5 0 0 1 .394 -1.1m2.106 -1.9a2.6 2.6 0 0 0 -3.347 -3.361" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHelpOffIcon.displayName = "TablerHelpOffIcon";
}
