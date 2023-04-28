import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWheelchairOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWheelchairOffIcon = React.forwardRef<SVGSVGElement, TablerWheelchairOffIconProps>(
	function TablerWheelchairOffIcon(props, ref) {
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
				<path d="M8 16m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
				<path d="M17.582 17.59a2 2 0 0 0 2.833 2.824" />
				<path d="M14 14h-1.4" />
				<path d="M6 6v5" />
				<path d="M6 8h2m4 0h5" />
				<path d="M15 8v3" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWheelchairOffIcon.displayName = "TablerWheelchairOffIcon";
}
