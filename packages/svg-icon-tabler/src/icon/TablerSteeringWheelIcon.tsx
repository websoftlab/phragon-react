import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSteeringWheelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSteeringWheelIcon = React.forwardRef<SVGSVGElement, TablerSteeringWheelIconProps>(
	function TablerSteeringWheelIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M12 14l0 7" />
				<path d="M10 12l-6.75 -2" />
				<path d="M14 12l6.75 -2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSteeringWheelIcon.displayName = "TablerSteeringWheelIcon";
}
