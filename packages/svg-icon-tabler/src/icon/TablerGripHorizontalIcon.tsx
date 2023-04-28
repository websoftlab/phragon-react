import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGripHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGripHorizontalIcon = React.forwardRef<SVGSVGElement, TablerGripHorizontalIconProps>(
	function TablerGripHorizontalIcon(props, ref) {
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
				<path d="M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGripHorizontalIcon.displayName = "TablerGripHorizontalIcon";
}
