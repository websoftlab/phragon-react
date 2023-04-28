import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNumber7IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNumber7Icon = React.forwardRef<SVGSVGElement, TablerNumber7IconProps>(function TablerNumber7Icon(
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
			<path d="M8 4h8l-4 16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNumber7Icon.displayName = "TablerNumber7Icon";
}
