import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerThermometerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerThermometerIcon = React.forwardRef<SVGSVGElement, TablerThermometerIconProps>(
	function TablerThermometerIcon(props, ref) {
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
				<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerThermometerIcon.displayName = "TablerThermometerIcon";
}
