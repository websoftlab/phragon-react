import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathIcon = React.forwardRef<SVGSVGElement, TablerMathIconProps>(function TablerMathIcon(props, ref) {
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
			<path d="M19 5h-7l-4 14l-3 -6h-2" />
			<path d="M14 13l6 6" />
			<path d="M14 19l6 -6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMathIcon.displayName = "TablerMathIcon";
}
