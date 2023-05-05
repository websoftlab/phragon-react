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
				<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
				<path d="M3 6 L21 6" />
				<path d="M16 10a4 4 0 0 1-8 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerShoppingBagIcon.displayName = "TablerShoppingBagIcon";
}
