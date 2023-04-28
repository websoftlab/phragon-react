import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStatusChangeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStatusChangeIcon = React.forwardRef<SVGSVGElement, TablerStatusChangeIconProps>(
	function TablerStatusChangeIcon(props, ref) {
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
				<path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M6 12v-2a6 6 0 1 1 12 0v2" />
				<path d="M15 9l3 3l3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerStatusChangeIcon.displayName = "TablerStatusChangeIcon";
}
