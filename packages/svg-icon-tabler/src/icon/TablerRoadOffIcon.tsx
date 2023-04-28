import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRoadOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRoadOffIcon = React.forwardRef<SVGSVGElement, TablerRoadOffIconProps>(function TablerRoadOffIcon(
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
			<path d="M4 19l3.332 -11.661" />
			<path d="M16 5l2.806 9.823" />
			<path d="M12 8v-2" />
			<path d="M12 13v-1" />
			<path d="M12 18v-2" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRoadOffIcon.displayName = "TablerRoadOffIcon";
}
