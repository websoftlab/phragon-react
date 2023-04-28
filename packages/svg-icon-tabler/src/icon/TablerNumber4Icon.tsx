import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNumber4IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNumber4Icon = React.forwardRef<SVGSVGElement, TablerNumber4IconProps>(function TablerNumber4Icon(
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
			<path d="M15 20v-15l-8 11h10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNumber4Icon.displayName = "TablerNumber4Icon";
}
