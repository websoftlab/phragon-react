import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowRotaryFirstLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowRotaryFirstLeftIcon = React.forwardRef<SVGSVGElement, TablerArrowRotaryFirstLeftIconProps>(
	function TablerArrowRotaryFirstLeftIcon(props, ref) {
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
				<path d="M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z" />
				<path d="M16 10v10" />
				<path d="M13.5 9.5l-8.5 8.5" />
				<path d="M10 18h-5v-5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowRotaryFirstLeftIcon.displayName = "TablerArrowRotaryFirstLeftIcon";
}
