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
				<path d="M4 5 H20 A2 2 0 0 1 22 7 V17 A2 2 0 0 1 20 19 H4 A2 2 0 0 1 2 17 V7 A2 2 0 0 1 4 5 z" />
				<path d="M2 10 L22 10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCreditCardIcon.displayName = "TablerCreditCardIcon";
}
