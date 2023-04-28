import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSmartHomeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSmartHomeIcon = React.forwardRef<SVGSVGElement, TablerSmartHomeIconProps>(
	function TablerSmartHomeIcon(props, ref) {
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
				<path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
				<path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSmartHomeIcon.displayName = "TablerSmartHomeIcon";
}
