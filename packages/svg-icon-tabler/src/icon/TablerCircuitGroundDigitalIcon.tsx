import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircuitGroundDigitalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircuitGroundDigitalIcon = React.forwardRef<SVGSVGElement, TablerCircuitGroundDigitalIconProps>(
	function TablerCircuitGroundDigitalIcon(props, ref) {
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
				<path d="M12 13v-10" />
				<path d="M12 21l-6 -8h12z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircuitGroundDigitalIcon.displayName = "TablerCircuitGroundDigitalIcon";
}
