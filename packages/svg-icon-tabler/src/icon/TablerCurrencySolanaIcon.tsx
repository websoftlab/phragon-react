import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencySolanaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencySolanaIcon = React.forwardRef<SVGSVGElement, TablerCurrencySolanaIconProps>(
	function TablerCurrencySolanaIcon(props, ref) {
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
				<path d="M4 18h12l4 -4h-12z" />
				<path d="M8 14l-4 -4h12l4 4" />
				<path d="M16 10l4 -4h-12l-4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencySolanaIcon.displayName = "TablerCurrencySolanaIcon";
}
