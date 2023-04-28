import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathMaxIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathMaxIcon = React.forwardRef<SVGSVGElement, TablerMathMaxIconProps>(function TablerMathMaxIcon(
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
			<path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M3 20c0 -8.75 4 -14 7 -14.5m4 0c3 .5 7 5.75 7 14.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMathMaxIcon.displayName = "TablerMathMaxIcon";
}
