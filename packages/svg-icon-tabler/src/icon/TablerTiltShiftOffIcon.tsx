import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTiltShiftOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTiltShiftOffIcon = React.forwardRef<SVGSVGElement, TablerTiltShiftOffIconProps>(
	function TablerTiltShiftOffIcon(props, ref) {
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
				<path d="M8.56 3.69a9 9 0 0 0 -.577 .263" />
				<path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
				<path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
				<path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
				<path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
				<path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
				<path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
				<path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
				<path d="M10.57 10.602a2 2 0 0 0 2.862 2.795" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTiltShiftOffIcon.displayName = "TablerTiltShiftOffIcon";
}
