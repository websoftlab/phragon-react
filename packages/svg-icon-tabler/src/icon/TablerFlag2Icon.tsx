import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlag2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlag2Icon = React.forwardRef<SVGSVGElement, TablerFlag2IconProps>(function TablerFlag2Icon(
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
			<path d="M5 14h14v-9h-14v16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFlag2Icon.displayName = "TablerFlag2Icon";
}
