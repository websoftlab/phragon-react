import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLocateOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLocateOffIcon = React.forwardRef<SVGSVGElement, TablerLocateOffIconProps>(
	function TablerLocateOffIcon(props, ref) {
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
				<path d="M2 12 L5 12" />
				<path d="M19 12 L22 12" />
				<path d="M12 2 L12 5" />
				<path d="M12 19 L12 22" />
				<path d="M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11" />
				<path d="M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29" />
				<path d="M2 2 L22 22" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLocateOffIcon.displayName = "TablerLocateOffIcon";
}
