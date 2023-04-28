import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyMoneroIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyMoneroIcon = React.forwardRef<SVGSVGElement, TablerCurrencyMoneroIconProps>(
	function TablerCurrencyMoneroIcon(props, ref) {
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
				<path d="M3 18h3v-11l6 7l6 -7v11h3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencyMoneroIcon.displayName = "TablerCurrencyMoneroIcon";
}
