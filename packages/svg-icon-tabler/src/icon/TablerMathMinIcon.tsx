import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathMinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathMinIcon = React.forwardRef<SVGSVGElement, TablerMathMinIconProps>(function TablerMathMinIcon(
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
			<path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z" />
			<path d="M3 4c0 8.75 4 14 7 14.5" />
			<path d="M14 18.5c3 -.5 7 -5.75 7 -14.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMathMinIcon.displayName = "TablerMathMinIcon";
}
