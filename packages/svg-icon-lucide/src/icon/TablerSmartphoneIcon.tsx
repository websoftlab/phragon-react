import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSmartphoneIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSmartphoneIcon = React.forwardRef<SVGSVGElement, TablerSmartphoneIconProps>(
	function TablerSmartphoneIcon(props, ref) {
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
				<path d="M7 2 H17 A2 2 0 0 1 19 4 V20 A2 2 0 0 1 17 22 H7 A2 2 0 0 1 5 20 V4 A2 2 0 0 1 7 2 z" />
				<path d="M12 18h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSmartphoneIcon.displayName = "TablerSmartphoneIcon";
}
