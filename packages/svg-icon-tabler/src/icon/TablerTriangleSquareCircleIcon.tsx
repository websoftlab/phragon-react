import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTriangleSquareCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTriangleSquareCircleIcon = React.forwardRef<SVGSVGElement, TablerTriangleSquareCircleIconProps>(
	function TablerTriangleSquareCircleIcon(props, ref) {
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
				<path d="M12 3l-4 7h8z" />
				<path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTriangleSquareCircleIcon.displayName = "TablerTriangleSquareCircleIcon";
}
