import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterWIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterWIcon = React.forwardRef<SVGSVGElement, TablerLetterWIconProps>(function TablerLetterWIcon(
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
			<path d="M4 4l4 16l4 -14l4 14l4 -16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterWIcon.displayName = "TablerLetterWIcon";
}
