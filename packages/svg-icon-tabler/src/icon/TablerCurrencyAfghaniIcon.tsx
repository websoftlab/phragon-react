import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyAfghaniIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyAfghaniIcon = React.forwardRef<SVGSVGElement, TablerCurrencyAfghaniIconProps>(
	function TablerCurrencyAfghaniIcon(props, ref) {
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
				<path d="M15 13h-3.5a3.5 3.5 0 1 1 3.5 -3.5v6.5h-7" />
				<path d="M12 3v.01" />
				<path d="M12 19v2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencyAfghaniIcon.displayName = "TablerCurrencyAfghaniIcon";
}
