import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlaneArrivalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlaneArrivalIcon = React.forwardRef<SVGSVGElement, TablerPlaneArrivalIconProps>(
	function TablerPlaneArrivalIcon(props, ref) {
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
				<path d="M15.157 11.81l4.83 1.295a2 2 0 1 1 -1.036 3.863l-14.489 -3.882l-1.345 -6.572l2.898 .776l1.414 2.45l2.898 .776l-.12 -7.279l2.898 .777l2.052 7.797z" />
				<path d="M3 21h18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlaneArrivalIcon.displayName = "TablerPlaneArrivalIcon";
}
