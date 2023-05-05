import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTargetIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTargetIcon = React.forwardRef<SVGSVGElement, TablerTargetIconProps>(function TablerTargetIcon(
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
			<path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12" />
			<path d="M18 12 A6 6 0 0 1 12 18 A6 6 0 0 1 6 12 A6 6 0 0 1 18 12" />
			<path d="M14 12 A2 2 0 0 1 12 14 A2 2 0 0 1 10 12 A2 2 0 0 1 14 12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTargetIcon.displayName = "TablerTargetIcon";
}
