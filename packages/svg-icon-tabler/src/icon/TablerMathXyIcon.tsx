import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathXyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathXyIcon = React.forwardRef<SVGSVGElement, TablerMathXyIconProps>(function TablerMathXyIcon(
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
			<path d="M14 9l3 5.063" />
			<path d="M4 9l6 6" />
			<path d="M4 15l6 -6" />
			<path d="M20 9l-4.8 9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMathXyIcon.displayName = "TablerMathXyIcon";
}
