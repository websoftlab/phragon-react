import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShoppingCartDiscountIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShoppingCartDiscountIcon = React.forwardRef<SVGSVGElement, TablerShoppingCartDiscountIconProps>(
	function TablerShoppingCartDiscountIcon(props, ref) {
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
				<path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M17 17h-11v-14h-2" />
				<path d="M20 6l-1 7h-13" />
				<path d="M10 10l6 -6" />
				<path d="M10.5 4.5m-.5 0a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" />
				<path d="M15.5 9.5m-.5 0a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerShoppingCartDiscountIcon.displayName = "TablerShoppingCartDiscountIcon";
}
