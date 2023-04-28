import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShoppingCartPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShoppingCartPlusIcon = React.forwardRef<SVGSVGElement, TablerShoppingCartPlusIconProps>(
	function TablerShoppingCartPlusIcon(props, ref) {
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
				<path d="M6 5l6 .429m7.138 6.573l-.143 1h-13" />
				<path d="M15 6h6m-3 -3v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerShoppingCartPlusIcon.displayName = "TablerShoppingCartPlusIcon";
}
