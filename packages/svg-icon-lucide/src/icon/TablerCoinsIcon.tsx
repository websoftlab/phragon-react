import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCoinsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCoinsIcon = React.forwardRef<SVGSVGElement, TablerCoinsIconProps>(function TablerCoinsIcon(
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
			<path d="M14 8 A6 6 0 0 1 8 14 A6 6 0 0 1 2 8 A6 6 0 0 1 14 8" />
			<path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
			<path d="M7 6h1v4" />
			<path d="m16.71 13.88.7.71-2.82 2.82" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCoinsIcon.displayName = "TablerCoinsIcon";
}
