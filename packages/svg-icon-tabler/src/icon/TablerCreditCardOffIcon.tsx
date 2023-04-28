import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCreditCardOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCreditCardOffIcon = React.forwardRef<SVGSVGElement, TablerCreditCardOffIconProps>(
	function TablerCreditCardOffIcon(props, ref) {
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
				<path d="M3 3l18 18" />
				<path d="M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.128 .87" />
				<path d="M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87" />
				<path d="M3 11l8 0" />
				<path d="M15 11l6 0" />
				<path d="M7 15l.01 0" />
				<path d="M11 15l2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCreditCardOffIcon.displayName = "TablerCreditCardOffIcon";
}
