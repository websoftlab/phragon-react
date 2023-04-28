import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyQuetzalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyQuetzalIcon = React.forwardRef<SVGSVGElement, TablerCurrencyQuetzalIconProps>(
	function TablerCurrencyQuetzalIcon(props, ref) {
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
				<path d="M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
				<path d="M13 13l5 5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencyQuetzalIcon.displayName = "TablerCurrencyQuetzalIcon";
}
