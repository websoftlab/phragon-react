import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrightnessUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrightnessUpIcon = React.forwardRef<SVGSVGElement, TablerBrightnessUpIconProps>(
	function TablerBrightnessUpIcon(props, ref) {
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
				<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M12 5l0 -2" />
				<path d="M17 7l1.4 -1.4" />
				<path d="M19 12l2 0" />
				<path d="M17 17l1.4 1.4" />
				<path d="M12 19l0 2" />
				<path d="M7 17l-1.4 1.4" />
				<path d="M6 12l-2 0" />
				<path d="M7 7l-1.4 -1.4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrightnessUpIcon.displayName = "TablerBrightnessUpIcon";
}
