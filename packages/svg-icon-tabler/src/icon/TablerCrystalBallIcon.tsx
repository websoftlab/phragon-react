import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCrystalBallIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCrystalBallIcon = React.forwardRef<SVGSVGElement, TablerCrystalBallIconProps>(
	function TablerCrystalBallIcon(props, ref) {
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
				<path d="M6.73 17.018a8 8 0 1 1 10.54 0" />
				<path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0 -4h-10a2 2 0 0 0 -2 2z" />
				<path d="M11 7a3 3 0 0 0 -3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCrystalBallIcon.displayName = "TablerCrystalBallIcon";
}
