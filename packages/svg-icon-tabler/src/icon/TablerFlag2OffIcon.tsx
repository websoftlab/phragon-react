import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlag2OffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlag2OffIcon = React.forwardRef<SVGSVGElement, TablerFlag2OffIconProps>(function TablerFlag2OffIcon(
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
			<path d="M5 14h9m4 0h1v-9h-10m-4 0v16" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFlag2OffIcon.displayName = "TablerFlag2OffIcon";
}
