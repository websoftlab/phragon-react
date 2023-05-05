import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLampFloorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLampFloorIcon = React.forwardRef<SVGSVGElement, TablerLampFloorIconProps>(
	function TablerLampFloorIcon(props, ref) {
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
				<path d="M9 2h6l3 7H6l3-7Z" />
				<path d="M12 9v13" />
				<path d="M9 22h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLampFloorIcon.displayName = "TablerLampFloorIcon";
}
