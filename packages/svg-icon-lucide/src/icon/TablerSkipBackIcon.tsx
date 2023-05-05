import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSkipBackIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSkipBackIcon = React.forwardRef<SVGSVGElement, TablerSkipBackIconProps>(function TablerSkipBackIcon(
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
			<path d="M19 20 L9 12 L19 4 L19 20Z" />
			<path d="M5 19 L5 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSkipBackIcon.displayName = "TablerSkipBackIcon";
}
