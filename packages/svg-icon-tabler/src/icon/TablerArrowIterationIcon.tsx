import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowIterationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowIterationIcon = React.forwardRef<SVGSVGElement, TablerArrowIterationIconProps>(
	function TablerArrowIterationIcon(props, ref) {
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
				<path d="M8.5 16a5.5 5.5 0 1 0 -5.5 -5.5v.5" />
				<path d="M3 16h18" />
				<path d="M18 13l3 3l-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowIterationIcon.displayName = "TablerArrowIterationIcon";
}
