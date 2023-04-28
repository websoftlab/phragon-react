import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircuitDiodeZenerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircuitDiodeZenerIcon = React.forwardRef<SVGSVGElement, TablerCircuitDiodeZenerIconProps>(
	function TablerCircuitDiodeZenerIcon(props, ref) {
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
				<path d="M22 12h-6" />
				<path d="M2 12h6" />
				<path d="M8 7l8 5l-8 5z" />
				<path d="M14 7h2v10h2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircuitDiodeZenerIcon.displayName = "TablerCircuitDiodeZenerIcon";
}
