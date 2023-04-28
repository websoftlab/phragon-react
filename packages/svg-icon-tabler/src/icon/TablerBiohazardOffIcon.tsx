import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBiohazardOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBiohazardOffIcon = React.forwardRef<SVGSVGElement, TablerBiohazardOffIconProps>(
	function TablerBiohazardOffIcon(props, ref) {
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
				<path d="M10.586 10.586a2 2 0 1 0 2.836 2.82" />
				<path d="M11.939 14c0 .173 .048 .351 .056 .533v.217a4.75 4.75 0 0 1 -4.533 4.745h-.217" />
				<path d="M2.495 14.745a4.75 4.75 0 0 1 7.737 -3.693" />
				<path d="M16.745 19.495a4.75 4.75 0 0 1 -4.69 -5.503h-.06" />
				<path d="M14.533 10.538a4.75 4.75 0 0 1 6.957 3.987v.217" />
				<path d="M10.295 10.929a4.75 4.75 0 0 1 -2.988 -3.64m.66 -3.324a4.75 4.75 0 0 1 .5 -.66l.164 -.172" />
				<path d="M15.349 3.133a4.75 4.75 0 0 1 -.836 7.385" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBiohazardOffIcon.displayName = "TablerBiohazardOffIcon";
}
