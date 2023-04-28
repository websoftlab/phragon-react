import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCoffinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCoffinIcon = React.forwardRef<SVGSVGElement, TablerCoffinIconProps>(function TablerCoffinIcon(
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
			<path d="M7 3l-2 6l2 12h6l2 -12l-2 -6z" />
			<path d="M10 7v5" />
			<path d="M8 9h4" />
			<path d="M13 21h4l2 -12l-2 -6h-4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCoffinIcon.displayName = "TablerCoffinIcon";
}
