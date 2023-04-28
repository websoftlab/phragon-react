import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRadiusBottomRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRadiusBottomRightIcon = React.forwardRef<SVGSVGElement, TablerRadiusBottomRightIconProps>(
	function TablerRadiusBottomRightIcon(props, ref) {
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
				<path d="M19 5v6a8 8 0 0 1 -8 8h-6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRadiusBottomRightIcon.displayName = "TablerRadiusBottomRightIcon";
}
