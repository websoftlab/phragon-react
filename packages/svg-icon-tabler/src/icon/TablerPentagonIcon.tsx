import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPentagonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPentagonIcon = React.forwardRef<SVGSVGElement, TablerPentagonIconProps>(function TablerPentagonIcon(
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
			<path d="M13.2 3.394l7.033 5.237a2 2 0 0 1 .7 2.247l-2.973 8.764a2 2 0 0 1 -1.894 1.358h-8.12a2 2 0 0 1 -1.9 -1.373l-2.896 -8.765a2 2 0 0 1 .696 -2.225l6.958 -5.237a2 2 0 0 1 2.397 0z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPentagonIcon.displayName = "TablerPentagonIcon";
}
