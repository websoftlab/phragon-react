import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingCottageIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingCottageIcon = React.forwardRef<SVGSVGElement, TablerBuildingCottageIconProps>(
	function TablerBuildingCottageIcon(props, ref) {
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
				<path d="M3 21l18 0" />
				<path d="M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11" />
				<path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingCottageIcon.displayName = "TablerBuildingCottageIcon";
}
