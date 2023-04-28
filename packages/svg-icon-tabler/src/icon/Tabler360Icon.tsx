import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface Tabler360IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const Tabler360Icon = React.forwardRef<SVGSVGElement, Tabler360IconProps>(function Tabler360Icon(props, ref) {
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
			<path d="M17 15.328c2.414 -.718 4 -1.94 4 -3.328c0 -2.21 -4.03 -4 -9 -4s-9 1.79 -9 4s4.03 4 9 4" />
			<path d="M9 13l3 3l-3 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	Tabler360Icon.displayName = "Tabler360Icon";
}
