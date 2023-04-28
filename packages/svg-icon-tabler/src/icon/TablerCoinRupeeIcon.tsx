import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCoinRupeeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCoinRupeeIcon = React.forwardRef<SVGSVGElement, TablerCoinRupeeIconProps>(
	function TablerCoinRupeeIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M15 8h-6h1a3 3 0 0 1 0 6h-1l3 3" />
				<path d="M9 11h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCoinRupeeIcon.displayName = "TablerCoinRupeeIcon";
}
