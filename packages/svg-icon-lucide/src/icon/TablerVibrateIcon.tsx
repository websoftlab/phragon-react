import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVibrateIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVibrateIcon = React.forwardRef<SVGSVGElement, TablerVibrateIconProps>(function TablerVibrateIcon(
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
			<path d="m2 8 2 2-2 2 2 2-2 2" />
			<path d="m22 8-2 2 2 2-2 2 2 2" />
			<path d="M9 5 H15 A1 1 0 0 1 16 6 V18 A1 1 0 0 1 15 19 H9 A1 1 0 0 1 8 18 V6 A1 1 0 0 1 9 5 z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVibrateIcon.displayName = "TablerVibrateIcon";
}
