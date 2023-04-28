import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextPlusIcon = React.forwardRef<SVGSVGElement, TablerTextPlusIconProps>(function TablerTextPlusIcon(
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
			<path d="M19 10h-14" />
			<path d="M5 6h14" />
			<path d="M14 14h-9" />
			<path d="M5 18h6" />
			<path d="M18 15v6" />
			<path d="M15 18h6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTextPlusIcon.displayName = "TablerTextPlusIcon";
}
