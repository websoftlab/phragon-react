import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterEIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterEIcon = React.forwardRef<SVGSVGElement, TablerLetterEIconProps>(function TablerLetterEIcon(
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
			<path d="M17 4h-10v16h10" />
			<path d="M7 12l8 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterEIcon.displayName = "TablerLetterEIcon";
}
