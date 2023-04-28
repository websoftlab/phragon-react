import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNumber5IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNumber5Icon = React.forwardRef<SVGSVGElement, TablerNumber5IconProps>(function TablerNumber5Icon(
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
			<path d="M8 20h4a4 4 0 1 0 0 -8h-4v-8h8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNumber5Icon.displayName = "TablerNumber5Icon";
}
