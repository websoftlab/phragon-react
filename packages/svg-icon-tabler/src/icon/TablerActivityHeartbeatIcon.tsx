import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerActivityHeartbeatIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerActivityHeartbeatIcon = React.forwardRef<SVGSVGElement, TablerActivityHeartbeatIconProps>(
	function TablerActivityHeartbeatIcon(props, ref) {
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
				<path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerActivityHeartbeatIcon.displayName = "TablerActivityHeartbeatIcon";
}
