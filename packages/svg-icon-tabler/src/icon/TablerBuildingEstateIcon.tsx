import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingEstateIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingEstateIcon = React.forwardRef<SVGSVGElement, TablerBuildingEstateIconProps>(
	function TablerBuildingEstateIcon(props, ref) {
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
				<path d="M3 21h18" />
				<path d="M19 21v-4" />
				<path d="M19 17a2 2 0 0 0 2 -2v-2a2 2 0 1 0 -4 0v2a2 2 0 0 0 2 2z" />
				<path d="M14 21v-14a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v14" />
				<path d="M9 17v4" />
				<path d="M8 13h2" />
				<path d="M8 9h2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingEstateIcon.displayName = "TablerBuildingEstateIcon";
}
