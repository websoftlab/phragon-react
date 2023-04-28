import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowBadgeRightFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowBadgeRightFilledIcon = React.forwardRef<SVGSVGElement, TablerArrowBadgeRightFilledIconProps>(
	function TablerArrowBadgeRightFilledIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				fill="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				strokeWidth={0}
				stroke="none"
			>
				<path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowBadgeRightFilledIcon.displayName = "TablerArrowBadgeRightFilledIcon";
}
