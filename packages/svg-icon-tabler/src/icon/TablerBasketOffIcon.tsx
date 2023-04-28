import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBasketOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBasketOffIcon = React.forwardRef<SVGSVGElement, TablerBasketOffIconProps>(
	function TablerBasketOffIcon(props, ref) {
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
				<path d="M7 10l1.359 -1.63" />
				<path d="M10.176 6.188l1.824 -2.188l5 6" />
				<path d="M18.77 18.757c-.358 .768 -1.027 1.262 -1.77 1.243h-10c-.966 .024 -1.807 -.817 -2 -2l-2 -8h7" />
				<path d="M14 10h7l-1.397 5.587" />
				<path d="M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBasketOffIcon.displayName = "TablerBasketOffIcon";
}
