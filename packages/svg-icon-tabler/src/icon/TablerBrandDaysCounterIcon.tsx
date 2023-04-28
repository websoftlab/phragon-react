import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandDaysCounterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandDaysCounterIcon = React.forwardRef<SVGSVGElement, TablerBrandDaysCounterIconProps>(
	function TablerBrandDaysCounterIcon(props, ref) {
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
				<path d="M20.779 10.007a9 9 0 1 0 -10.77 10.772" />
				<path d="M13 21h8v-7" />
				<path d="M12 8v4l3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandDaysCounterIcon.displayName = "TablerBrandDaysCounterIcon";
}
