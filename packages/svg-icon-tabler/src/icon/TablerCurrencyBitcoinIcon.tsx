import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyBitcoinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyBitcoinIcon = React.forwardRef<SVGSVGElement, TablerCurrencyBitcoinIconProps>(
	function TablerCurrencyBitcoinIcon(props, ref) {
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
				<path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />
				<path d="M8 6l0 12" />
				<path d="M8 12l6 0" />
				<path d="M9 3l0 3" />
				<path d="M13 3l0 3" />
				<path d="M9 18l0 3" />
				<path d="M13 18l0 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencyBitcoinIcon.displayName = "TablerCurrencyBitcoinIcon";
}
