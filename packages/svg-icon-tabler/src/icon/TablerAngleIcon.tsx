import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAngleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAngleIcon = React.forwardRef<SVGSVGElement, TablerAngleIconProps>(function TablerAngleIcon(
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
			<path d="M21 19h-18l9 -15" />
			<path d="M20.615 15.171h.015" />
			<path d="M19.515 11.771h.015" />
			<path d="M17.715 8.671h.015" />
			<path d="M15.415 5.971h.015" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAngleIcon.displayName = "TablerAngleIcon";
}
