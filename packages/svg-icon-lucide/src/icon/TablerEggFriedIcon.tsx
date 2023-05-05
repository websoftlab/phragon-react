import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEggFriedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEggFriedIcon = React.forwardRef<SVGSVGElement, TablerEggFriedIconProps>(function TablerEggFriedIcon(
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
			<path d="M15 12.5 A3.5 3.5 0 0 1 11.5 16 A3.5 3.5 0 0 1 8 12.5 A3.5 3.5 0 0 1 15 12.5" />
			<path d="M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerEggFriedIcon.displayName = "TablerEggFriedIcon";
}
