import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerReceiptOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerReceiptOffIcon = React.forwardRef<SVGSVGElement, TablerReceiptOffIconProps>(
	function TablerReceiptOffIcon(props, ref) {
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
				<path d="M5 21v-16m2 -2h10a2 2 0 0 1 2 2v10m0 4.01v1.99l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
				<path d="M11 7l4 0" />
				<path d="M9 11l2 0" />
				<path d="M13 15l2 0" />
				<path d="M15 11l0 .01" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerReceiptOffIcon.displayName = "TablerReceiptOffIcon";
}
