import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWaterpoloIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWaterpoloIcon = React.forwardRef<SVGSVGElement, TablerWaterpoloIconProps>(
	function TablerWaterpoloIcon(props, ref) {
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
				<path d="M12 9a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
				<path d="M5 8l3 4l4.5 1l7.5 -1" />
				<path d="M3 18.75a2.4 2.4 0 0 0 1 .25a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 1 -.25" />
				<path d="M12 16l.5 -3" />
				<path d="M6.5 5a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWaterpoloIcon.displayName = "TablerWaterpoloIcon";
}
