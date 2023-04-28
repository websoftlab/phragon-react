import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencySomIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencySomIcon = React.forwardRef<SVGSVGElement, TablerCurrencySomIconProps>(
	function TablerCurrencySomIcon(props, ref) {
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
				<path d="M10 18v-12h-5v10a2 2 0 0 1 -2 2" />
				<path d="M14 6v12h4a3 3 0 0 0 0 -6h-4h4a3 3 0 0 0 0 -6h-4z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencySomIcon.displayName = "TablerCurrencySomIcon";
}
