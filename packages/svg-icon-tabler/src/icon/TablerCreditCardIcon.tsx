import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCreditCardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCreditCardIcon = React.forwardRef<SVGSVGElement, TablerCreditCardIconProps>(
	function TablerCreditCardIcon(props, ref) {
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
				<path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
				<path d="M3 10l18 0" />
				<path d="M7 15l.01 0" />
				<path d="M11 15l2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCreditCardIcon.displayName = "TablerCreditCardIcon";
}
