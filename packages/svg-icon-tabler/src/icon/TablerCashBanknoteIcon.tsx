import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCashBanknoteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCashBanknoteIcon = React.forwardRef<SVGSVGElement, TablerCashBanknoteIconProps>(
	function TablerCashBanknoteIcon(props, ref) {
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
				<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<path d="M18 12l.01 0" />
				<path d="M6 12l.01 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCashBanknoteIcon.displayName = "TablerCashBanknoteIcon";
}
