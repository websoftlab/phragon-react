import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMessage2PauseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMessage2PauseIcon = React.forwardRef<SVGSVGElement, TablerMessage2PauseIconProps>(
	function TablerMessage2PauseIcon(props, ref) {
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
				<path d="M8 9h8" />
				<path d="M8 13h6" />
				<path d="M13 20l-1 1l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" />
				<path d="M17 17v5" />
				<path d="M21 17v5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMessage2PauseIcon.displayName = "TablerMessage2PauseIcon";
}
