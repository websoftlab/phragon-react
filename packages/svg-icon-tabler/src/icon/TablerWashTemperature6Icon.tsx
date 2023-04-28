import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWashTemperature6IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWashTemperature6Icon = React.forwardRef<SVGSVGElement, TablerWashTemperature6IconProps>(
	function TablerWashTemperature6Icon(props, ref) {
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
				<path d="M9 15h.01" />
				<path d="M3 6l1.721 10.329a2 2 0 0 0 1.973 1.671h10.612a2 2 0 0 0 1.973 -1.671l1.721 -10.329" />
				<path d="M12 15h.01" />
				<path d="M15 15h.01" />
				<path d="M15 12h.01" />
				<path d="M12 12h.01" />
				<path d="M9 12h.01" />
				<path d="M3.486 8.965c.168 .02 .34 .033 .514 .035c.79 .009 1.539 -.178 2 -.5c.461 -.32 1.21 -.507 2 -.5c.79 -.007 1.539 .18 2 .5c.461 .322 1.21 .509 2 .5c.79 .009 1.539 -.178 2 -.5c.461 -.32 1.21 -.507 2 -.5c.79 -.007 1.539 .18 2 .5c.461 .322 1.21 .509 2 .5c.17 0 .339 -.014 .503 -.034" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWashTemperature6Icon.displayName = "TablerWashTemperature6Icon";
}
