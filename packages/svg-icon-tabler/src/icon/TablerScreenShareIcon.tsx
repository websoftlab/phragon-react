import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerScreenShareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerScreenShareIcon = React.forwardRef<SVGSVGElement, TablerScreenShareIconProps>(
	function TablerScreenShareIcon(props, ref) {
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
				<path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" />
				<path d="M7 20l10 0" />
				<path d="M9 16l0 4" />
				<path d="M15 16l0 4" />
				<path d="M17 4h4v4" />
				<path d="M16 9l5 -5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerScreenShareIcon.displayName = "TablerScreenShareIcon";
}
