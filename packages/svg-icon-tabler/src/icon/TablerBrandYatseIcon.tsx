import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandYatseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandYatseIcon = React.forwardRef<SVGSVGElement, TablerBrandYatseIconProps>(
	function TablerBrandYatseIcon(props, ref) {
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
				<path d="M7 3l5 2.876v5.088l4.197 -2.73l4.803 2.731l-9.281 5.478l-2.383 1.41l-2.334 1.377l-3 1.77v-5.565l3 -1.771z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandYatseIcon.displayName = "TablerBrandYatseIcon";
}
