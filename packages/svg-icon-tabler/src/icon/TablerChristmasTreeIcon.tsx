import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChristmasTreeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChristmasTreeIcon = React.forwardRef<SVGSVGElement, TablerChristmasTreeIconProps>(
	function TablerChristmasTreeIcon(props, ref) {
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
				<path d="M12 3l4 4l-2 1l4 4l-3 1l4 4h-14l4 -4l-3 -1l4 -4l-2 -1z" />
				<path d="M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChristmasTreeIcon.displayName = "TablerChristmasTreeIcon";
}
