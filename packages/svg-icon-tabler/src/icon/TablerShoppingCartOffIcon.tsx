import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShoppingCartOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShoppingCartOffIcon = React.forwardRef<SVGSVGElement, TablerShoppingCartOffIconProps>(
	function TablerShoppingCartOffIcon(props, ref) {
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
				<path d="M17 17a2 2 0 1 0 2 2" />
				<path d="M17 17h-11v-11" />
				<path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerShoppingCartOffIcon.displayName = "TablerShoppingCartOffIcon";
}
