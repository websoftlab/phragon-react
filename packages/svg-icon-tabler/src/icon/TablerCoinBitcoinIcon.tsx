import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCoinBitcoinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCoinBitcoinIcon = React.forwardRef<SVGSVGElement, TablerCoinBitcoinIconProps>(
	function TablerCoinBitcoinIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M9 8h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09" />
				<path d="M10 12h4" />
				<path d="M10 7v10v-9" />
				<path d="M13 7v1" />
				<path d="M13 16v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCoinBitcoinIcon.displayName = "TablerCoinBitcoinIcon";
}
