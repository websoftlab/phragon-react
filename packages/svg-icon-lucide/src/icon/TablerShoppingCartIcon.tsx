import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShoppingCartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShoppingCartIcon = React.forwardRef<SVGSVGElement, TablerShoppingCartIconProps>(
	function TablerShoppingCartIcon(props, ref) {
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
				<path d="M9 21 A1 1 0 0 1 8 22 A1 1 0 0 1 7 21 A1 1 0 0 1 9 21" />
				<path d="M20 21 A1 1 0 0 1 19 22 A1 1 0 0 1 18 21 A1 1 0 0 1 20 21" />
				<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerShoppingCartIcon.displayName = "TablerShoppingCartIcon";
}
