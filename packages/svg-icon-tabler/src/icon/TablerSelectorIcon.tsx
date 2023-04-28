import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSelectorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSelectorIcon = React.forwardRef<SVGSVGElement, TablerSelectorIconProps>(function TablerSelectorIcon(
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
			<path d="M8 9l4 -4l4 4" />
			<path d="M16 15l-4 4l-4 -4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSelectorIcon.displayName = "TablerSelectorIcon";
}
