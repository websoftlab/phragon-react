import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChristmasTreeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChristmasTreeOffIcon = React.forwardRef<SVGSVGElement, TablerChristmasTreeOffIconProps>(
	function TablerChristmasTreeOffIcon(props, ref) {
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
				<path d="M9.5 5.5l2.5 -2.5l4 4l-2 1l4 4l-1.5 .5m.5 4.5h-12l4 -4l-3 -1l3 -3" />
				<path d="M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChristmasTreeOffIcon.displayName = "TablerChristmasTreeOffIcon";
}
