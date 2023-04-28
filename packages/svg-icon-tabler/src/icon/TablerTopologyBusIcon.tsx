import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTopologyBusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTopologyBusIcon = React.forwardRef<SVGSVGElement, TablerTopologyBusIconProps>(
	function TablerTopologyBusIcon(props, ref) {
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
				<path d="M14 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M6 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M22 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M2 16h20" />
				<path d="M4 12v4" />
				<path d="M12 12v4" />
				<path d="M20 12v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTopologyBusIcon.displayName = "TablerTopologyBusIcon";
}
