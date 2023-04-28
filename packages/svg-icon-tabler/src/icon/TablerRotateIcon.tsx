import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRotateIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRotateIcon = React.forwardRef<SVGSVGElement, TablerRotateIconProps>(function TablerRotateIcon(
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
			<path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRotateIcon.displayName = "TablerRotateIcon";
}
