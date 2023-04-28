import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerReceiptTaxIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerReceiptTaxIcon = React.forwardRef<SVGSVGElement, TablerReceiptTaxIconProps>(
	function TablerReceiptTaxIcon(props, ref) {
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
				<path d="M9 14l6 -6" />
				<path d="M9,8.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
				<path d="M14,13.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
				<path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerReceiptTaxIcon.displayName = "TablerReceiptTaxIcon";
}
