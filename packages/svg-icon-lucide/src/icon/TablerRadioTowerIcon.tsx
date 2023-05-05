import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRadioTowerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRadioTowerIcon = React.forwardRef<SVGSVGElement, TablerRadioTowerIconProps>(
	function TablerRadioTowerIcon(props, ref) {
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
				<path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9" />
				<path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" />
				<path d="M14 9 A2 2 0 0 1 12 11 A2 2 0 0 1 10 9 A2 2 0 0 1 14 9" />
				<path d="M16.2 4.8c2 2 2.26 5.11.8 7.47" />
				<path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1" />
				<path d="M9.5 18h5" />
				<path d="m8 22 4-11 4 11" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRadioTowerIcon.displayName = "TablerRadioTowerIcon";
}
