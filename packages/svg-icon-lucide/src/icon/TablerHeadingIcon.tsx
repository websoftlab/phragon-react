import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHeadingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHeadingIcon = React.forwardRef<SVGSVGElement, TablerHeadingIconProps>(function TablerHeadingIcon(
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
			<path d="M6 12h12" />
			<path d="M6 20V4" />
			<path d="M18 20V4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHeadingIcon.displayName = "TablerHeadingIcon";
}
