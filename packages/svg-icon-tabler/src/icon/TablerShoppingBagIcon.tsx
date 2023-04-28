import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShoppingBagIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShoppingBagIcon = React.forwardRef<SVGSVGElement, TablerShoppingBagIconProps>(
	function TablerShoppingBagIcon(props, ref) {
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
				<path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
				<path d="M9 11v-5a3 3 0 0 1 6 0v5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerShoppingBagIcon.displayName = "TablerShoppingBagIcon";
}
