import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBookKeyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBookKeyIcon = React.forwardRef<SVGSVGElement, TablerBookKeyIconProps>(function TablerBookKeyIcon(
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
			<path d="M20,2l-4.5,4.5" />
			<path d="M19,3l1,1" />
			<path d="M16 8 A2 2 0 0 1 14 10 A2 2 0 0 1 12 8 A2 2 0 0 1 16 8" />
			<path d="M4,19.5C4,18.1,5.1,17,6.5,17H20" />
			<path d="M20,8v14H6.5C5.1,22,4,20.9,4,19.5v-15C4,3.1,5.1,2,6.5,2H14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBookKeyIcon.displayName = "TablerBookKeyIcon";
}
