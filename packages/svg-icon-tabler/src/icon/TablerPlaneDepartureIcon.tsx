import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlaneDepartureIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlaneDepartureIcon = React.forwardRef<SVGSVGElement, TablerPlaneDepartureIconProps>(
	function TablerPlaneDepartureIcon(props, ref) {
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
				<path d="M14.639 10.258l4.83 -1.294a2 2 0 1 1 1.035 3.863l-14.489 3.883l-4.45 -5.02l2.897 -.776l2.45 1.414l2.897 -.776l-3.743 -6.244l2.898 -.777l5.675 5.727z" />
				<path d="M3 21h18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlaneDepartureIcon.displayName = "TablerPlaneDepartureIcon";
}
