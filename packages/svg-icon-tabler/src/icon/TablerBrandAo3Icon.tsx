import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandAo3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandAo3Icon = React.forwardRef<SVGSVGElement, TablerBrandAo3IconProps>(function TablerBrandAo3Icon(
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
			<path d="M2 5c7.109 4.1 10.956 10.131 12 14c1.074 -4.67 4.49 -8.94 8 -11" />
			<path d="M14 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M7 9c-.278 5.494 -2.337 7.33 -4 10c4.013 -2 6.02 -5 15.05 -5c4.012 0 3.51 2.5 1 3c2 .5 2.508 5 -2.007 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBrandAo3Icon.displayName = "TablerBrandAo3Icon";
}
