import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandThreejsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandThreejsIcon = React.forwardRef<SVGSVGElement, TablerBrandThreejsIconProps>(
	function TablerBrandThreejsIcon(props, ref) {
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
				<path d="M8 22l-5 -19l19 5.5z" />
				<path d="M12.573 17.58l-6.152 -1.576l8.796 -9.466l1.914 6.64" />
				<path d="M12.573 17.58l-1.573 -6.58l6.13 2.179" />
				<path d="M9.527 4.893l1.473 6.107l-6.31 -1.564z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandThreejsIcon.displayName = "TablerBrandThreejsIcon";
}
