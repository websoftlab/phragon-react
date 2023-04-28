import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTreadmillIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTreadmillIcon = React.forwardRef<SVGSVGElement, TablerTreadmillIconProps>(
	function TablerTreadmillIcon(props, ref) {
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
				<path d="M10 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
				<path d="M3 14l4 1l.5 -.5" />
				<path d="M12 18v-3l-3 -2.923l.75 -5.077" />
				<path d="M6 10v-2l4 -1l2.5 2.5l2.5 .5" />
				<path d="M21 22a1 1 0 0 0 -1 -1h-16a1 1 0 0 0 -1 1" />
				<path d="M18 21l1 -11l2 -1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTreadmillIcon.displayName = "TablerTreadmillIcon";
}
