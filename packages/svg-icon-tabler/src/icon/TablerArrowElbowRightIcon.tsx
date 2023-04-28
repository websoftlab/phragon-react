import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowElbowRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowElbowRightIcon = React.forwardRef<SVGSVGElement, TablerArrowElbowRightIconProps>(
	function TablerArrowElbowRightIcon(props, ref) {
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
				<path d="M21 14v-6h-6" />
				<path d="M21 8l-9 9l-9 -9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowElbowRightIcon.displayName = "TablerArrowElbowRightIcon";
}
