import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyDogecoinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyDogecoinIcon = React.forwardRef<SVGSVGElement, TablerCurrencyDogecoinIconProps>(
	function TablerCurrencyDogecoinIcon(props, ref) {
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
				<path d="M6 12h6" />
				<path d="M9 6v12" />
				<path d="M6 18h6a6 6 0 1 0 0 -12h-6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencyDogecoinIcon.displayName = "TablerCurrencyDogecoinIcon";
}
