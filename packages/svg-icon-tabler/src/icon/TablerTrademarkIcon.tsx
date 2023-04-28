import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrademarkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrademarkIcon = React.forwardRef<SVGSVGElement, TablerTrademarkIconProps>(
	function TablerTrademarkIcon(props, ref) {
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
				<path d="M4.5 9h5m-2.5 0v6" />
				<path d="M13 15v-6l3 4l3 -4v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTrademarkIcon.displayName = "TablerTrademarkIcon";
}
