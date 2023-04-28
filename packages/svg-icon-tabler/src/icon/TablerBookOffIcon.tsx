import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBookOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBookOffIcon = React.forwardRef<SVGSVGElement, TablerBookOffIconProps>(function TablerBookOffIcon(
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
			<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096" />
			<path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0" />
			<path d="M3 6v13" />
			<path d="M12 6v2m0 4v7" />
			<path d="M21 6v11" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBookOffIcon.displayName = "TablerBookOffIcon";
}
