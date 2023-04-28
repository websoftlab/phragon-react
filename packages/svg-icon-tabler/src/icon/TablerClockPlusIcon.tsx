import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockPlusIcon = React.forwardRef<SVGSVGElement, TablerClockPlusIconProps>(
	function TablerClockPlusIcon(props, ref) {
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
				<path d="M20.984 12.535a9 9 0 1 0 -8.468 8.45" />
				<path d="M16 19h6" />
				<path d="M19 16v6" />
				<path d="M12 7v5l3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClockPlusIcon.displayName = "TablerClockPlusIcon";
}
