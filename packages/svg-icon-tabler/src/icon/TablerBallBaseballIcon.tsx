import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBallBaseballIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBallBaseballIcon = React.forwardRef<SVGSVGElement, TablerBallBaseballIconProps>(
	function TablerBallBaseballIcon(props, ref) {
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
				<path d="M5.636 18.364a9 9 0 1 0 12.728 -12.728a9 9 0 0 0 -12.728 12.728z" />
				<path d="M12.495 3.02a9 9 0 0 1 -9.475 9.475" />
				<path d="M20.98 11.505a9 9 0 0 0 -9.475 9.475" />
				<path d="M9 9l2 2" />
				<path d="M13 13l2 2" />
				<path d="M11 7l2 1" />
				<path d="M7 11l1 2" />
				<path d="M16 11l1 2" />
				<path d="M11 16l2 1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBallBaseballIcon.displayName = "TablerBallBaseballIcon";
}
