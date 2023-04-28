import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNumber9IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNumber9Icon = React.forwardRef<SVGSVGElement, TablerNumber9IconProps>(function TablerNumber9Icon(
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
			<path d="M16 8a4 4 0 1 0 -8 0v1a4 4 0 1 0 8 0" />
			<path d="M8 16a4 4 0 1 0 8 0v-8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNumber9Icon.displayName = "TablerNumber9Icon";
}
