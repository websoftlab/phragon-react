import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandNextjsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandNextjsIcon = React.forwardRef<SVGSVGElement, TablerBrandNextjsIconProps>(
	function TablerBrandNextjsIcon(props, ref) {
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
				<path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
				<path d="M15 12v-3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandNextjsIcon.displayName = "TablerBrandNextjsIcon";
}
