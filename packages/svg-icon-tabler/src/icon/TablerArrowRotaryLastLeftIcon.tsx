import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowRotaryLastLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowRotaryLastLeftIcon = React.forwardRef<SVGSVGElement, TablerArrowRotaryLastLeftIconProps>(
	function TablerArrowRotaryLastLeftIcon(props, ref) {
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
				<path d="M15 15a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z" />
				<path d="M15 15v6" />
				<path d="M12.5 9.5l-6.5 -6.5" />
				<path d="M11 3h-5v5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowRotaryLastLeftIcon.displayName = "TablerArrowRotaryLastLeftIcon";
}
