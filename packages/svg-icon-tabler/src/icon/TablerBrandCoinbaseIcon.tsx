import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandCoinbaseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandCoinbaseIcon = React.forwardRef<SVGSVGElement, TablerBrandCoinbaseIconProps>(
	function TablerBrandCoinbaseIcon(props, ref) {
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
				<path d="M12.95 22c-4.503 0 -8.445 -3.04 -9.61 -7.413c-1.165 -4.373 .737 -8.988 4.638 -11.25a9.906 9.906 0 0 1 12.008 1.598l-3.335 3.367a5.185 5.185 0 0 0 -7.354 .013a5.252 5.252 0 0 0 0 7.393a5.185 5.185 0 0 0 7.354 .013l3.349 3.367a9.887 9.887 0 0 1 -7.05 2.912z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandCoinbaseIcon.displayName = "TablerBrandCoinbaseIcon";
}
