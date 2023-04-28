import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHeartbeatIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHeartbeatIcon = React.forwardRef<SVGSVGElement, TablerHeartbeatIconProps>(
	function TablerHeartbeatIcon(props, ref) {
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
				<path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" />
				<path d="M3 13h2l2 3l2 -6l1 3h3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHeartbeatIcon.displayName = "TablerHeartbeatIcon";
}
