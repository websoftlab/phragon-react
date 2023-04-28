import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowElbowLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowElbowLeftIcon = React.forwardRef<SVGSVGElement, TablerArrowElbowLeftIconProps>(
	function TablerArrowElbowLeftIcon(props, ref) {
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
				<path d="M3 14v-6h6" />
				<path d="M3 8l9 9l9 -9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowElbowLeftIcon.displayName = "TablerArrowElbowLeftIcon";
}
