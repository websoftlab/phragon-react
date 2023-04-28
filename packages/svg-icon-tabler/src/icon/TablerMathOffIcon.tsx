import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathOffIcon = React.forwardRef<SVGSVGElement, TablerMathOffIconProps>(function TablerMathOffIcon(
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
			<path d="M14 19l2.5 -2.5" />
			<path d="M18.5 14.5l1.5 -1.5" />
			<path d="M3 3l18 18" />
			<path d="M19 5h-7l-.646 2.262" />
			<path d="M10.448 10.431l-2.448 8.569l-3 -6h-2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMathOffIcon.displayName = "TablerMathOffIcon";
}
