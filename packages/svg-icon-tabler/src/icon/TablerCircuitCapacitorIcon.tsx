import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircuitCapacitorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircuitCapacitorIcon = React.forwardRef<SVGSVGElement, TablerCircuitCapacitorIconProps>(
	function TablerCircuitCapacitorIcon(props, ref) {
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
				<path d="M22 12h-8" />
				<path d="M2 12h8" />
				<path d="M10 7v10" />
				<path d="M14 7v10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircuitCapacitorIcon.displayName = "TablerCircuitCapacitorIcon";
}
