import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBookLockIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBookLockIcon = React.forwardRef<SVGSVGElement, TablerBookLockIconProps>(function TablerBookLockIcon(
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
			<path d="M4,19.5C4,18.1,5.1,17,6.5,17H20" />
			<path d="M18,6V4c0-1.1-0.9-2-2-2s-2,0.9-2,2v2" />
			<path d="M20,15v7H6.5C5.1,22,4,20.9,4,19.5v-15C4,3.1,5.1,2,6.5,2H10" />
			<path d="M13,6h6c0.6,0,1,0.4,1,1v3c0,0.6-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1V7C12,6.4,12.4,6,13,6z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBookLockIcon.displayName = "TablerBookLockIcon";
}
