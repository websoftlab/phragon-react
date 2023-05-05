import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPencilIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPencilIcon = React.forwardRef<SVGSVGElement, TablerPencilIconProps>(function TablerPencilIcon(
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
			<path d="M18 2 L22 6" />
			<path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPencilIcon.displayName = "TablerPencilIcon";
}
