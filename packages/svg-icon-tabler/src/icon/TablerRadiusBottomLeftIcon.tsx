import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRadiusBottomLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRadiusBottomLeftIcon = React.forwardRef<SVGSVGElement, TablerRadiusBottomLeftIconProps>(
	function TablerRadiusBottomLeftIcon(props, ref) {
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
				<path d="M19 19h-6a8 8 0 0 1 -8 -8v-6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRadiusBottomLeftIcon.displayName = "TablerRadiusBottomLeftIcon";
}
