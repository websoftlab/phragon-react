import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCloudDataConnectionIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCloudDataConnectionIcon = React.forwardRef<SVGSVGElement, TablerCloudDataConnectionIconProps>(
	function TablerCloudDataConnectionIcon(props, ref) {
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
				<path d="M5 9.897c0 -1.714 1.46 -3.104 3.26 -3.104c.275 -1.22 1.255 -2.215 2.572 -2.611c1.317 -.397 2.77 -.134 3.811 .69c1.042 .822 1.514 2.08 1.239 3.3h.693a2.42 2.42 0 0 1 2.425 2.414a2.42 2.42 0 0 1 -2.425 2.414h-8.315c-1.8 0 -3.26 -1.39 -3.26 -3.103z" />
				<path d="M12 13v3" />
				<path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M14 18h7" />
				<path d="M3 18h7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCloudDataConnectionIcon.displayName = "TablerCloudDataConnectionIcon";
}
