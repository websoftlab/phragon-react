import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRotate2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRotate2Icon = React.forwardRef<SVGSVGElement, TablerRotate2IconProps>(function TablerRotate2Icon(
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
			<path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" />
			<path d="M18.37 7.16l0 .01" />
			<path d="M13 19.94l0 .01" />
			<path d="M16.84 18.37l0 .01" />
			<path d="M19.37 15.1l0 .01" />
			<path d="M19.94 11l0 .01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRotate2Icon.displayName = "TablerRotate2Icon";
}
