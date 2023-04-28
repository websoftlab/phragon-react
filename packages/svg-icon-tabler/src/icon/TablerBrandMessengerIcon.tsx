import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandMessengerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandMessengerIcon = React.forwardRef<SVGSVGElement, TablerBrandMessengerIconProps>(
	function TablerBrandMessengerIcon(props, ref) {
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
				<path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
				<path d="M8 13l3 -2l2 2l3 -2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandMessengerIcon.displayName = "TablerBrandMessengerIcon";
}
